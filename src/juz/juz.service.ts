import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JuzResponse, Juz } from './dto/juz.dto';

@Injectable()
export class JuzService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async listJuzs(): Promise<JuzResponse> {
    try {
      const baseUrl = this.configService.get('SOURCE_URL');
      const { data } = await this.httpService.get(`${baseUrl}juzs`).toPromise();
      if (data.juzs) {
        const juzs: Juz[] = data.juzs as Juz[];
        return { success: true, juzs };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }
}
