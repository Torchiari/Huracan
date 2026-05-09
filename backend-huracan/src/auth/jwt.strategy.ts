import { Injectable, UnauthorizedException } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-custom';

import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private usersService: UsersService) {
    super();
  }

  async validate(req: any) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        throw new UnauthorizedException();
      }

      const token = authHeader.replace('Bearer ', '');

      const { createRemoteJWKSet, jwtVerify } = await import('jose');

      const JWKS = createRemoteJWKSet(
        new URL(`${process.env.SUPABASE_URL}/auth/v1/.well-known/jwks.json`),
      );

      const { payload } = await jwtVerify(token, JWKS);

      const user = await this.usersService.findOne(payload.sub as string);

      if (!user) {
        throw new UnauthorizedException();
      }

      return user;
    } catch (error) {
      console.log('JWT ERROR:', error);

      throw new UnauthorizedException();
    }
  }
}
