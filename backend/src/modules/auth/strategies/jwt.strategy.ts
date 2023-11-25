import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { ConfigService } from '@nestjs/config';
import { AccountsService } from '../../accounts/accounts.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
    private accountsService: AccountsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>("JWT_SECRET"),
      passReqToCallback: true
    });
  }

  // Parse the JWT from incoming requests
  async validate(req: Request, payload: any) {
    const { email } = payload;
    const accessToken = req.headers['authorization'].split(' ')[1];

    const isValid = this.accountsService.validateAccessToken(email, accessToken);
    if (isValid) {
      const user = await this.usersService.findByEmail(email);
      if (user) {
        return user;
      }
    }
    throw new UnauthorizedException();
  }
}