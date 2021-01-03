import { HttpService, Injectable } from '@nestjs/common';
import { BASE_URL } from 'src/constants';
import { Recitation, RecitationResponse } from './dto/recitation.dto';
import { TranslationResponse, Translation } from './dto/translation.dto';
import { Language, LanguageResponse } from './dto/language.dto';
import { Tafsir, TafsirResponse } from './dto/tafsir.dto';

@Injectable()
export class OptionService {
  constructor(private readonly httpService: HttpService) {}

  async listRecitations(language: string): Promise<RecitationResponse> {
    try {
      const { data } = await this.httpService
        .get(`${BASE_URL}options/recitations?language=${language}`)
        .toPromise();
      if (data.recitations) {
        const recitations: Recitation[] = data.recitations as Recitation[];
        return { success: true, recitations };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }

  async listTranstions(language: string): Promise<TranslationResponse> {
    try {
      const { data } = await this.httpService
        .get(`${BASE_URL}options/translations?language=${language}`)
        .toPromise();
      if (data.translations) {
        const translations: Translation[] = data.translations as Translation[];
        return { success: true, translations };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }

  async listLanguages(language: string): Promise<LanguageResponse> {
    try {
      const { data } = await this.httpService
        .get(`${BASE_URL}options/languages?language=${language}`)
        .toPromise();
      if (data.languages) {
        const languages: Language[] = data.languages as Language[];
        return { success: true, languages };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }

  async listTafsirs(): Promise<TafsirResponse> {
    try {
      const { data } = await this.httpService
        .get(`${BASE_URL}options/tafsirs`)
        .toPromise();
      if (data.tafsirs) {
        const tafsirs: Tafsir[] = data.tafsirs as Tafsir[];
        return { success: true, tafsirs };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }
}
