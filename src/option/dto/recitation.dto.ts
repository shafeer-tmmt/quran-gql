import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recitation {
  @Field()
  id: number;

  @Field({ nullable: true })
  style?: string;

  @Field({ nullable: true })
  reciter_name_eng?: string;

  @Field({ nullable: true })
  reciter_name_translated?: string;
}

@ObjectType()
export class RecitationResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => [Recitation], { nullable: true })
  recitations?: Recitation[];
}
