import { Args, Query, Resolver } from '@nestjs/graphql';
import { VerseService } from './verse.service';
import { VersesResponse, SingleVerseResponse } from './dto/verse.dto';
import { SingleVerseInput, VersesInput } from './dto/verse-input.dto';

@Resolver()
export class VerseResolver {
  constructor(private service: VerseService) {}

  @Query(() => VersesResponse)
  async listVerses(
    @Args('verseInput') verseInput?: VersesInput,
  ): Promise<VersesResponse> {
    return this.service.listVerses(verseInput);
  }

  @Query(() => SingleVerseResponse)
  async getSingleVerse(
    @Args('singleVerseInput') input?: SingleVerseInput,
  ): Promise<SingleVerseResponse> {
    return this.service.singleVerse(input);
  }
}
