import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TranslatedName {
  @Field({ nullable: true })
  language_name: string;

  @Field({ nullable: true })
  name?: string;
}

@ObjectType()
export class Language {
  @Field()
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  iso_code?: string;

  @Field({ nullable: true })
  native_name?: string;

  @Field({ nullable: true })
  direction?: string;

  @Field(type => [TranslatedName], { nullable: true })
  translated_names?: TranslatedName[];
}

@ObjectType()
export class LanguageResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => [Language], { nullable: true })
  languages?: Language[];
}
