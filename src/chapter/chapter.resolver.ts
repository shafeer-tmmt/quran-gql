import { Args, Query, Resolver } from '@nestjs/graphql';
import { ChapterService } from './chapter.service';
import { ChapterInfoResponse } from './dto/chapter-info-response.dto';
import { GetChapterResponse } from './dto/get-chapter-response.dto';
import { ListChapterResponse } from './dto/list-chapter-response.dto';

@Resolver()
export class ChapterResolver {
  constructor(private chapterService: ChapterService) {}

  @Query(() => GetChapterResponse)
  async getChapter(
    @Args('chapterId') chapterId: string,
    @Args('lang', { nullable: true, defaultValue: 'en' }) language?: string,
  ): Promise<GetChapterResponse> {
    return this.chapterService.getChapter(chapterId, language);
  }

  @Query(() => ListChapterResponse)
  async listChapters(
    @Args('lang', { nullable: true, defaultValue: 'en' }) language?: string,
  ): Promise<ListChapterResponse> {
    return this.chapterService.listChapters(language);
  }

  @Query(() => ChapterInfoResponse)
  async chapterInfo(
    @Args('chapterId') chapterId: string,
    @Args('lang', { nullable: true, defaultValue: 'en' }) language?: string,
  ): Promise<ChapterInfoResponse> {
    return this.chapterService.chapterInfo(chapterId, language);
  }
}
