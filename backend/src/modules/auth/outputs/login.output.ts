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

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  district?: string;

  @Field({ nullable: true })
  address?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  accessToken: String;

  @Field()
  refreshAccessToken: String;
}