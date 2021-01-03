import { Module, HttpModule } from '@nestjs/common';
import { VerseResolver } from './verse.resolver';
import { VerseService } from './verse.service';

@Module({
  imports:[HttpModule],
  providers: [VerseResolver, VerseService]
})
export class VerseModule {}
