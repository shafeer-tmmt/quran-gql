import { HttpModuleOptions, HttpService, Injectable } from '@nestjs/common';
import { BASE_URL } from 'src/constants';
import { Chapter } from './dto/chapter.dto';
import { GetChapterResponse } from './dto/get-chapter-response.dto';
import { ListChapterResponse } from './dto/list-chapter-response.dto';
import { ChapterInfo } from './dto/chapter-info.dto';
import { ChapterInfoResponse } from './dto/chapter-info-response.dto';

@Injectable()
export class ChapterService {
  constructor(private readonly httpService: HttpService) {}

  async getChapter(
    chapterId: string,
    language: string = 'en',
  ): Promise<GetChapterResponse> {
    try {
      const { data } = await this.httpService
        .get(`${BASE_URL}chapters/${chapterId}?language=${language}`)
        .toPromise();
      if (data.chapter) {
        const chapter: Chapter = data.chapter as Chapter;
        return { success: true, chapter: chapter };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }

  async listChapters(language: string): Promise<ListChapterResponse> {
    try {
      const { data } = await this.httpService
        .get(`${BASE_URL}chapters?language=${language}`)
        .toPromise();
      if (data.chapters) {
        const chapters: Chapter[] = data.chapters as Chapter[];
        return { success: true, chapters: chapters };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }

  async chapterInfo(
    chapterId: string,
    language: string,
  ): Promise<ChapterInfoResponse> {
    try {
      const { data } = await this.httpService
        .get(`${BASE_URL}chapters/${chapterId}/info?language=${language}`)
        .toPromise();
      if (data.chapter_info) {
        const chapterInfo: ChapterInfo = data.chapter_info as ChapterInfo;
        return { success: true, chapterInfo: chapterInfo };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }
}
