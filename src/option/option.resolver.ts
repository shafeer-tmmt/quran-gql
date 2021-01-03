import { Args, Query, Resolver } from '@nestjs/graphql';
import { OptionService } from './option.service';
import { RecitationResponse } from './dto/recitation.dto';
import { ListChapterResponse } from 'src/chapter/dto/list-chapter-response.dto';
import { TranslationResponse } from './dto/translation.dto';
import { LanguageResponse } from './dto/language.dto';
import { TafsirResponse } from './dto/tafsir.dto';

@Resolver()
export class OptionResolver {
  constructor(private service: OptionService) {}

  @Query(() => RecitationResponse)
  async recitations(
    @Args('lang', { nullable: true, defaultValue: 'en' }) language?: string,
  ): Promise<RecitationResponse> {
    return this.service.listRecitations(language);
  }

  @Query(() => TranslationResponse)
  async translations(
    @Args('lang', { nullable: true, defaultValue: 'en' }) language?: string,
  ): Promise<TranslationResponse> {
    return this.service.listTranstions(language);
  }

  @Query(() => LanguageResponse)
  async languages(
    @Args('lang', { nullable: true, defaultValue: 'en' }) language?: string,
  ): Promise<LanguageResponse> {
    return this.service.listLanguages(language);
  }

  @Query(() => TafsirResponse)
  async tafsirs(): Promise<TafsirResponse> {
    return this.service.listTafsirs();
  }
}
