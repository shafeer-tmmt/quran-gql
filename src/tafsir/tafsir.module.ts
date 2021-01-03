import { Module, HttpModule } from '@nestjs/common';
import { TafsirResolver } from './tafsir.resolver';
import { TafsirService } from './tafsir.service';

@Module({
  imports: [HttpModule],
  providers: [TafsirResolver, TafsirService],
})
export class TafsirModule {}
