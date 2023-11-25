import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { UnauthorizedException } from "@nestjs/common";
import { LoginOutput } from "./outputs/login.output";
import { LoginInput } from "./inputs/login.input";

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
}