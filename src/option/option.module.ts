import { HttpModule, Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionResolver } from './option.resolver';

@Module({
  imports: [HttpModule],
  providers: [OptionService, OptionResolver],
})
export class OptionModule {}
