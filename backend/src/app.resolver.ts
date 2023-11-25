import { UseGuards } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { CurrentUser, JwtAuthGuard } from "./modules/auth/guards/jwt-auth.guard";
import { User } from "./modules/users/user.entity";

@Resolver()
export class AppResolver {

  @UseGuards(JwtAuthGuard)
  @Query(() => String)
  sayHello(@CurrentUser() currentUser: User) {
    return `Hello ${currentUser.firstName}!`;
  }
}