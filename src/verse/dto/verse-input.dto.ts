import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class VersesInput {
  @Field()
  chapter_id: string;

  @Field({ nullable: true })
  recitation?: string;

  @Field(type => [String], { nullable: true })
  translations?: [string];

  @Field(type => [String], { nullable: true })
  media?: [string];

  @Field({ nullable: true })
  language?: string;

  @Field({ nullable: true })
  page?: string;

  @Field({ nullable: true })
  offset?: string;

  @Field({ nullable: true })
  limit?: string;

  @Field({ nullable: true })
  text_type?: string;
}

@InputType()
export class SingleVerseInput{
  @Field()
  chapter_id: number;

  @Field()
  verse_number: number;
}
