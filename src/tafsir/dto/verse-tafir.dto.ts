import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VerseTafsir {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  verse_id: number;

  @Field({ nullable: true })
  language_name: string;

  @Field({ nullable: true })
  resource_name: string;

  @Field({ nullable: true })
  verse_key: string;
}

@ObjectType()
export class VerseTafsirResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => [VerseTafsir], { nullable: true })
  verseTafsirs?: VerseTafsir[];
}
