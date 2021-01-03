import { Query, Resolver, Args } from '@nestjs/graphql';
import { TafsirService } from './tafsir.service';
import { VerseTafsirInput } from './dto/vers-tafsir-input.dto';
import { VerseTafsirResponse } from './dto/verse-tafir.dto';

@Resolver()
export class TafsirResolver {
  constructor(private service: TafsirService) {}

  @Query(() => VerseTafsirResponse)
  async listTafsirOfVerse(
    @Args('verseTafsirInput') verseTafsirInput?: VerseTafsirInput,
  ): Promise<VerseTafsirResponse> {
    return this.service.listTafsirsOfaVerse(verseTafsirInput);
  }
}
