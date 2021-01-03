import { Field, ObjectType } from '@nestjs/graphql';
import { Chapter } from './chapter.dto';

@ObjectType()
export class GetChapterResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => Chapter, { nullable: true })
  chapter?: Chapter;
}
