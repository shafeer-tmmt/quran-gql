import { ChapterResolver } from './chapter.resolver';
import { HttpModule, Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';

@Module({
  imports: [HttpModule],
  providers: [ChapterResolver, ChapterService],
})
export class ChapterModule {}
