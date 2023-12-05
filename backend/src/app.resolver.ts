import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import {
  CurrentUser,
  JwtAuthGuard,
} from './modules/auth/guards/jwt-auth.guard';
import { User } from './modules/users/user.entity';
import { ConfigService } from '@nestjs/config';

@Resolver()
export class AppResolver {
  constructor(private readonly configService: ConfigService) {}

  @Query(() => String)
  showEnv() {
    const env = this.configService.get<string>('NODE_ENV') || 'development';
    return `Running environment: ${env}`;
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => String)
  sayHello(@CurrentUser() currentUser: User) {
    return `Hello ${currentUser.firstName}!`;
  }
}
