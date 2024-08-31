import { Controller, Post, Body, HttpException, Request } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
//import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Request() req: Request, @Body() authPayload: AuthPayloadDto) {
    // req.user = something
    const user = this.authService.validateUser(authPayload);
    if (!user) throw new HttpException('Invalid Credentials', 401);
    return user;
  }
}
