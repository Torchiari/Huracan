import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UseGuards, Req, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: any) {
    return this.authService.register(body.email, body.password);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.authService.login(body.email, body.password);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  me(@Req() req) {
    return req.user;
  }
}
