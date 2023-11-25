import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { UseGuards, UnauthorizedException } from "@nestjs/common";
import { LoginOutput } from "./outputs/login.output";
import { LoginInput } from "./inputs/login.input";
import { CurrentPayload, JwtRefreshAuthGuard } from "./guards/jwt-refresh-auth.guard";
import { RefreshTokenOutput } from "./outputs/refreshToken.output";
import { CurrentUser, JwtAuthGuard } from "./guards/jwt-auth.guard";
import { User } from "../users/user.entity";

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Mutation(() => LoginOutput)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.login(loginInput.email, loginInput.password);
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Mutation(() => RefreshTokenOutput)
  refreshTokens(@CurrentPayload() payload: any) {
    return this.authService.refreshTokens(payload.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  logout(@CurrentUser() currentUser: User) {
    return this.authService.clearJwtTokens(currentUser.id);
  }
}