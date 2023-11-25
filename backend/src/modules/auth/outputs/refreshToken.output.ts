import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RefreshTokenOutput {
  @Field()
  accessToken: String;

  @Field()
  refreshAccessToken: String;
}