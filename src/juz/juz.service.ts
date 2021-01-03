import { Injectable, HttpService } from '@nestjs/common';
import { BASE_URL } from 'src/constants';
import { JuzResponse, Juz } from './dto/juz.dto';

@Injectable()
export class JuzService {
  constructor(private httpService: HttpService) {}

  async listJuzs(): Promise<JuzResponse> {
    try {
      const { data } = await this.httpService
        .get(`${BASE_URL}juzs`)
        .toPromise();
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
