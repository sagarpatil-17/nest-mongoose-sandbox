import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// Define an interface matching your JWT payload structure
interface JwtPayload {
  sub: string; // The user ID
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      
      ignoreExpiration: false,

      secretOrKey: process.env.JWT_SECRET || 'fallbackSecretKey',
    });
  }

  async validate(payload: JwtPayload) {
    return { 
      userId: payload.sub, 
      email: payload.email 
    };
  }
}
