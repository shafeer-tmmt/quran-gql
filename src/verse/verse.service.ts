import { Injectable, HttpService } from '@nestjs/common';
import { BASE_URL } from 'src/constants';
import { SingleVerseInput, VersesInput } from './dto/verse-input.dto';
import {
  Verse,
  VersesResponse,
  MetaData,
  SingleVerseResponse,
} from './dto/verse.dto';

@Injectable()
export class VerseService {
  constructor(private httpService: HttpService) {}

  async listVerses(verseInput: VersesInput): Promise<VersesResponse> {
    try {
      const { data } = await this.httpService
        .get(`${BASE_URL}chapters/${verseInput.chapter_id}/verses?`, {
          params: this.buildFilterQuery(verseInput),
        })
        .toPromise();
      if (data.verses) {
        const verses: Verse[] = data.verses as Verse[];
        const meta: MetaData = data.meta as MetaData;
        return { success: true, verses, meta };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }

  async singleVerse(
    verseInput: SingleVerseInput,
  ): Promise<SingleVerseResponse> {
    try {
      const { data } = await this.httpService
        .get(
          `${BASE_URL}chapters/${verseInput.chapter_id}/verses/${verseInput.verse_number}`,
        )
        .toPromise();
      if (data.verse) {
        const verse: Verse = data.verse as Verse;
        return { success: true, verse };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }

  private buildFilterQuery(verseInput: VersesInput): URLSearchParams {
    const params = new URLSearchParams();

    const {
      recitation,
      translations,
      media,
      language,
      page,
      offset,
      limit,
      text_type,
    } = verseInput;

    if (recitation) {
      params.append('recitation', recitation);
    }
    if (translations) {
      translations.forEach(tranlation => {
        params.append('translations', tranlation);
      });
    }

    if (media) {
      media.forEach(item => {
        params.append('media', item);
      });
    }

    if (language) params.append('language', language);
    if (page) params.append('page', page);
    if (offset) params.append('offset', offset);
    if (limit) params.append('limit', limit);
    if (text_type) params.append('text_type', text_type);
    return params;
  }
}
