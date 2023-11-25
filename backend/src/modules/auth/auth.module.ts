import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AccountsModule } from '../accounts/accounts.module';
import { UsersModule } from '../users/users.module';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  imports: [
    PassportModule,
    AccountsModule,
    UsersModule,
    JwtModule,
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthService]
})
export class AuthModule { }
