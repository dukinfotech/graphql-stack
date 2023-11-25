import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LoginOutput {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  birthday: string;

  @Field()
  phone?: string;

  @Field()
  country?: string;

  @Field()
  city?: string;

  @Field()
  district?: string;

  @Field()
  address?: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;

  @Field()
  accessToken: String;

  @Field()
  refreshAccessToken: String;
}