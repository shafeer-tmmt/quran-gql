import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Translation {
  @Field()
  id: number;

  @Field({ nullable: true })
  author_name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  language_name?: string;
}

@ObjectType()
export class TranslationResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => [Translation], { nullable: true })
  translations?: Translation[];
}
