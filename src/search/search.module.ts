import { Module, HttpModule } from '@nestjs/common';
import { SearchResolver } from './search.resolver';
import { SearchService } from './search.service';

@Module({
  imports: [HttpModule],
  providers: [SearchResolver, SearchService],
})
export class SearchModule {}
