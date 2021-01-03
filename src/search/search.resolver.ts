import { Args, Query, Resolver } from '@nestjs/graphql';
import { SearchResponse } from './dto/search.dto';
import { SearchService } from './search.service';
import { SearchInput } from './dto/search-input.dto';

@Resolver()
export class SearchResolver {
  constructor(private service: SearchService) {}

  @Query(() => SearchResponse)
  async search(
    @Args('searchInput') searchInput: SearchInput,
  ): Promise<SearchResponse> {
    return this.service.search(searchInput);
  }
}
