import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AccountsService } from '../accounts/accounts.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {

  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) { }

  async login(email: string, password: string) {
    const account = await this.accountsService.findByEmail(email);
    if (account) {
      const isMatch = bcrypt.compareSync(password, account.hashedPassword);
      if (isMatch) {
        if (!account.isActive) {
          throw new BadRequestException('Account not activated');
        }
        const user = account.user;
        const { accessToken, refreshAccessToken } = await this.generateJwtTokens(account.userId, account.email);
        this.updateJwtTokens(account.userId, accessToken, refreshAccessToken);
        return { ...user, accessToken, refreshAccessToken }
      }
    }
    throw new BadRequestException('Email or password is incorrect');
  }

  private async generateJwtTokens(userId: number, email: string) {
    const [accessToken, refreshAccessToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: '24h',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: '180d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshAccessToken,
    };
  }

  private async updateJwtTokens(userId: number, accessToken: string, refreshAccessToken: string) {
    const [hashedAccessToken, hashedRefreshAccessToken] = await Promise.all([
      bcrypt.hash(accessToken, 10),
      bcrypt.hash(refreshAccessToken, 10)
    ]);
    await this.accountsService.updateJwtTokens(userId, hashedAccessToken, hashedRefreshAccessToken);
  }
}