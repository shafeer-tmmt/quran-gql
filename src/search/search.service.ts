import { Injectable, HttpService } from '@nestjs/common';
import { BASE_URL } from 'src/constants';
import { SearchInput } from './dto/search-input.dto';
import { Result, SearchResponse } from './dto/search.dto';

@Injectable()
export class SearchService {
  constructor(private httpService: HttpService) {}

  async search(input: SearchInput): Promise<SearchResponse> {
    try {
      const { data } = await this.httpService
        .get(`${BASE_URL}search`, {
          params: this.buildFilterQuery(input),
        })
        .toPromise();
      if (data) {
        const result: Result = data as Result;
        return { success: true, result };
      }
    } catch (error) {
      return { success: false, message: error?.response?.statusText };
    }
    return { success: false, message: 'unkwown error' };
  }

  private buildFilterQuery(input: SearchInput): URLSearchParams {
    const params = new URLSearchParams();

    const { query, size, page, language } = input;

    if (query) params.append('query', query);
    if (size) params.append('size', `${size}`);
    if (page) params.append('page', `${page}`);
    if (language) params.append('language', language);
    return params;
  }
}
