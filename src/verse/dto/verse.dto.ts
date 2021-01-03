import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VMediaContents {
  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  embed_text?: string;

  @Field({ nullable: true })
  provider?: string;

  @Field({ nullable: true })
  author_name?: string;
}

@ObjectType()
export class VTranslation {
  @Field({ nullable: true })
  language_name?: string;

  @Field({ nullable: true })
  text?: string;
}

@ObjectType()
export class VAudio {
  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  duration?: number;

  @Field({ nullable: true })
  format?: string;

  @Field(type => [[Number]], { nullable: true })
  segments?: [[number]];
}

@ObjectType()
export class WTransliteration {
  @Field({ nullable: true })
  language_name?: string;

  @Field({ nullable: true })
  text?: string;
}

@ObjectType()
export class WTranslation {
  @Field({ nullable: true })
  language_name?: string;

  @Field({ nullable: true })
  text?: string;
}

@ObjectType()
export class VWord {
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
  code_dec?: number;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  char_type?: string;

  @Field(type => WTranslation, { nullable: true })
  translation?: WTranslation;

  @Field(type => WTransliteration, { nullable: true })
  transliteration?: WTransliteration;
}

@ObjectType()
export class Verse {
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

  @Field({ nullable: true })
  text_simple?: string;

  @Field({ nullable: true })
  text_indopak?: string;

  @Field({ nullable: true })
  juz_number?: number;

  @Field({ nullable: true })
  hizb_number?: number;

  @Field({ nullable: true })
  rub_number?: number;

  @Field({ nullable: true })
  sajdah?: string;

  @Field({ nullable: true })
  sajdah_number?: number;

  @Field({ nullable: true })
  page_number?: number;

  @Field(type => [VWord], { nullable: true })
  words: VWord[];

  @Field(type => VAudio, { nullable: true })
  audio?: VAudio;

  @Field(type => [VTranslation], { nullable: true })
  translations?: VTranslation[];

  @Field(type => [VMediaContents], { nullable: true })
  media_contents?: VMediaContents[];
}

@ObjectType()
export class MetaData {
  @Field({ nullable: true })
  current_page?: number;

  @Field({ nullable: true })
  next_page?: number;

  @Field({ nullable: true })
  prev_page?: number;

  @Field({ nullable: true })
  total_pages?: number;

  @Field({ nullable: true })
  total_count?: number;
}

@ObjectType()
export class VersesResponse {
  @Field({ nullable: true })
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => [Verse], { nullable: true })
  verses?: Verse[];

  @Field(type => MetaData, { nullable: true })
  meta?: MetaData;
}

@ObjectType()
export class SingleVerseResponse {
  @Field({ nullable: true })
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => Verse, { nullable: true })
  verse?: Verse;
}
