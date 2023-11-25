import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AccountsService } from '../../accounts/accounts.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    private configService: ConfigService,
    private accountsService: AccountsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>("JWT_REFRESH_SECRET"),
      passReqToCallback: true
    });
  }

  // Parse the JWT from incoming requests
  async validate(req: Request, payload: any) {
    const { email } = payload;
    const refreshAccessToken = req.headers['authorization'].split(' ')[1];

    const isValid = this.accountsService.validateRefreshAccessToken(email, refreshAccessToken);
    if (isValid) {
      return { ...payload, refreshAccessToken }
    }
    throw new UnauthorizedException();
  }
}