import { Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { User } from "../users/user.entity";
import { GetSelfOutput } from "./outputs/getSelf.output";
import { CurrentUser, JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Resolver()
export class UsersResolver {

  @UseGuards(JwtAuthGuard)
  @Query(() => GetSelfOutput)
  getSelf(@CurrentUser() currentUser: User) {
    return currentUser;
  }
}