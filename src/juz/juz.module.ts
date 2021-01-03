import { Module, HttpModule } from '@nestjs/common';
import { JuzResolver } from './juz.resolver';
import { JuzService } from './juz.service';

@Module({
  imports: [HttpModule],
  providers: [JuzResolver, JuzService],
})
export class JuzModule {}
