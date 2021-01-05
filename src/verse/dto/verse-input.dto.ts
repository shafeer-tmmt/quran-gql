import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class VersesInput {
  @Field()
  chapter_id?: number;

  @Field({ nullable: true })
  recitation?: string;

  @Field(type => [String], { nullable: true })
  translations?: [string];

  @Field(type => [String], { nullable: true })
  media?: [string];

  @Field({ nullable: true })
  language?: string;

  @Field({ nullable: true })
  page?: number;

  @Field({ nullable: true })
  offset?: number;

  @Field({ nullable: true })
  limit?: number;

  @Field({ nullable: true })
  text_type?: string;
}

@InputType()
export class SingleVerseInput {
  @Field()
  chapter_id: number;

  @Field()
  verse_number: number;
}
