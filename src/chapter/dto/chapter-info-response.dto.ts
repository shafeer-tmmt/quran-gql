import { Field, ObjectType } from '@nestjs/graphql';
import { ChapterInfo } from './chapter-info.dto';

@ObjectType()
export class ChapterInfoResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => ChapterInfo, { nullable: true })
  chapterInfo?: ChapterInfo;
}
