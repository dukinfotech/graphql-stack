import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class GetSelfOutput {
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

  @Field(type => [String])
  roles: String[];

  @Field(type => [String])
  permissions: String[];
}