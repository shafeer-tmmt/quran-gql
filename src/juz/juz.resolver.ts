import { Query, Resolver } from '@nestjs/graphql';
import { JuzService } from './juz.service';
import { JuzResponse } from './dto/juz.dto';

@Resolver()
export class JuzResolver {
  constructor(private service: JuzService) {}

  @Query(() => JuzResponse)
  async getAllJuzs(): Promise<JuzResponse> {
    return this.service.listJuzs();
  }
}
