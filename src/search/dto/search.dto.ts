import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RAudio {
  @Field({ nullable: true })
  url?: string;
}

@ObjectType()
export class RTranslation {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  language_name?: string;

  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  resource_name?: string;

  @Field({ nullable: true })
  resource_id?: number;
}

@ObjectType()
export class RTransilteration {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  language_name?: string;

  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  resource_name?: string;

  @Field({ nullable: true })
  resource_id?: number;
}

@ObjectType()
export class RWord {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  position?: number;

  @Field({ nullable: true })
  text_madani?: string;

  @Field({ nullable: true })
  text_indopak?: string;

  @Field({ nullable: true })
  text_simple?: string;

  @Field({ nullable: true })
  verse_key?: string;

  @Field({ nullable: true })
  class_name?: string;

  @Field({ nullable: true })
  line_number?: number;

  @Field({ nullable: true })
  page_number?: number;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  code_v3?: string;

  @Field({ nullable: true })
  char_type?: string;

  @Field(type => RAudio, { nullable: true })
  audio?: RAudio;

  @Field(type => RTranslation, { nullable: true })
  translation?: RTranslation;

  @Field(type => RTransilteration, { nullable: true })
  transliteration?: RTransilteration;

  @Field({ nullable: true })
  highlight?: string;
}

@ObjectType()
export class ResultUnit {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  verse_number?: number;

  @Field({ nullable: true })
  chapter_id?: number;

  @Field({ nullable: true })
  verse_key?: string;

  @Field({ nullable: true })
  text_madani?: string;

  @Field(type => [RWord], { nullable: true })
  words?: RWord[];
}

@ObjectType()
export class Result {
  @Field({ nullable: true })
  query?: string;

  @Field({ nullable: true })
  total_count?: number;

  @Field({ nullable: true })
  took?: number;

  @Field({ nullable: true })
  current_page?: number;

  @Field({ nullable: true })
  total_pages?: number;

  @Field({ nullable: true })
  per_page?: number;

  @Field(type => [ResultUnit], {
    nullable: true,
  })
  results?: ResultUnit[];
}

@ObjectType()
export class SearchResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => Result, { nullable: true })
  result?: Result;
}
