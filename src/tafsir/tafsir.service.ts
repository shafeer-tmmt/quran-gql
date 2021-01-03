import { Injectable, HttpService } from '@nestjs/common';
import { BASE_URL } from 'src/constants';
import { VerseTafsirInput } from './dto/vers-tafsir-input.dto';
import { VerseTafsir, VerseTafsirResponse } from './dto/verse-tafir.dto';

@Injectable()
export class TafsirService {
  constructor(private httpService: HttpService) {}

  async listTafsirsOfaVerse(
    input: VerseTafsirInput,
  ): Promise<VerseTafsirResponse> {
    try {
      const { data } = await this.httpService
        .get(
          `${BASE_URL}chapters/${input.chapter_id}/verses/${input.verse_id}/tafsirs`,
          {
            params: this.buildFilterQuery(input),
          },
        )
        .toPromise();
      if (data.tafsirs) {
        const verseTafsirs: VerseTafsir[] = data.tafsirs as VerseTafsir[];
        return { success: true, verseTafsirs };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }

  private buildFilterQuery(input: VerseTafsirInput): URLSearchParams {
    const { tafsirs } = input;
    const params = new URLSearchParams();
    if (tafsirs) params.append('tafsirs', `${tafsirs}`);
    return params;
  }
}
