import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { UseGuards, UnauthorizedException, Req } from "@nestjs/common";
import { LoginOutput } from "./outputs/login.output";
import { LoginInput } from "./inputs/login.input";
import { JwtRefreshAuthGuard } from "./guards/jwt-refresh-auth.guard";
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
  refreshTokens() {
    try {
      return this.authService.refreshTokens(1);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}