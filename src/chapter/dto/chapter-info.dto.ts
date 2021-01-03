import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChapterInfo {
  @Field({ nullable: true })
  chapter_id?: number;

  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  short_text?: string;

  @Field({ nullable: true })
  language_name?: string;

  @Field({ nullable: true })
  source?: string;
}
