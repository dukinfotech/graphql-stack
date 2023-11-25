import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { UseGuards, UnauthorizedException } from "@nestjs/common";
import { LoginOutput } from "./outputs/login.output";
import { LoginInput } from "./inputs/login.input";
import { CurrentPayload, JwtRefreshAuthGuard } from "./guards/jwt-refresh-auth.guard";
import { RefreshTokenOutput } from "./outputs/refreshToken.output";

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Mutation(() => LoginOutput)
  login(@Args('loginInput') loginInput: LoginInput) {
    try {
      return this.authService.login(loginInput.email, loginInput.password);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Mutation(() => RefreshTokenOutput)
  refreshTokens(@CurrentPayload() payload: any) {
    try {
      return this.authService.refreshTokens(payload.userId);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}