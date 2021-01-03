import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tafsir {
  @Field()
  id: number;

  @Field({ nullable: true })
  author_name: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  language_name?: string;
}

@ObjectType()
export class TafsirResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => [Tafsir], { nullable: true })
  tafsirs?: Tafsir[];
}
