import { UseGuards } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "./modules/auth/guards/jwt-auth.guard";

@Resolver()
export class AppResolver {
  @UseGuards(JwtAuthGuard)
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}