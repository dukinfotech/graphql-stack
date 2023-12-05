import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AccountsService } from '../accounts/accounts.service';
import { ConfigService } from '@nestjs/config';
import { Account } from '../accounts/account.entity';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(email: string, password: string, userAgent: string) {
    const account = await this.accountsService.findByEmail(email);
    if (account) {
      const isMatch = bcrypt.compareSync(password, account.hashedPassword);
      if (isMatch) {
        if (!account.isActive) {
          throw new BadRequestException('Account not activated');
        }
        const user = account.user;
        const { accessToken, refreshAccessToken } =
          await this.generateJwtTokens(account);
        this.updateJwtTokens(account.userId, accessToken, refreshAccessToken);
        this.accountsService.updateLoginHistory(account, userAgent);
        return { ...user, accessToken, refreshAccessToken };
      }
    }
    throw new BadRequestException('Email or password is incorrect');
  }

  async refreshTokens(userId: number) {
    const account = await this.accountsService.findByUserId(userId);
    const tokens = await this.generateJwtTokens(account);
    this.updateJwtTokens(
      account.userId,
      tokens.accessToken,
      tokens.refreshAccessToken,
    );
    return tokens;
  }

  async clearJwtTokens(userId: number) {
    await this.updateJwtTokens(userId, null, null);
    return true;
  }

  private async generateJwtTokens(account: Account) {
    const user = account.user;
    const userRoles = user.roles.map((role) => role.name);
    const userPermissions = user.permissions.map(
      (permission) => permission.name,
    );
    const claims = {
      'x-hasura-allowed-roles': userRoles, // Hasura claims
      'x-hasura-default-role': 'user', // Can be overridden by the x-hasura-role header when making a reques
      'x-hasura-allowed-permissions:': userPermissions.toString(), // Custom claims
      'x-hasura-user-id': user.id.toString(), // Custom claims
    };
    const payload = {
      sub: account.email,
      hasura: {
        claims,
      },
    };
    const [accessToken, refreshAccessToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        algorithm: 'HS256',
        secret: this.configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
        expiresIn: this.configService.get<string>('JWT_ACCESS_TOKEN_EXPIRE'),
      }),
      this.jwtService.signAsync(payload, {
        algorithm: 'HS256',
        secret: this.configService.get<string>(
          'JWT_REFRESH_ACCESS_TOKEN_SECRET',
        ),
        expiresIn: this.configService.get<string>(
          'JWT_REFRESH_ACCESS_TOKEN_EXPIRE',
        ),
      }),
    ]);

    return {
      accessToken,
      refreshAccessToken,
    };
  }

  private async updateJwtTokens(
    userId: number,
    accessToken: string,
    refreshAccessToken: string,
  ) {
    if (accessToken && refreshAccessToken) {
      const [hashedAccessToken, hashedRefreshAccessToken] = await Promise.all([
        bcrypt.hash(accessToken, 10),
        bcrypt.hash(refreshAccessToken, 10),
      ]);
      await this.accountsService.updateJwtTokens(
        userId,
        hashedAccessToken,
        hashedRefreshAccessToken,
      );
    } else {
      await this.accountsService.updateJwtTokens(userId, null, null);
    }
  }
}
