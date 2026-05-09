import { Injectable, UnauthorizedException } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-custom';

import { Request } from 'express';

import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private usersService: UsersService) {
    super();
  }

  async validate(req: Request) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        throw new UnauthorizedException('No token');
      }

      const token = authHeader.split(' ')[1];

      const { createRemoteJWKSet, jwtVerify } = await import('jose');

      const JWKS = createRemoteJWKSet(
        new URL(`${process.env.SUPABASE_URL}/auth/v1/.well-known/jwks.json`),
      );

      const { payload } = await jwtVerify(token, JWKS);

      const user = await this.usersService.findOne(payload.sub as string);

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      return user;
    } catch (err) {
      console.log('JWT STRATEGY ERROR:', err);

      throw new UnauthorizedException();
    }
  }
}
