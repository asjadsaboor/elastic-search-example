import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsService {
  public apiService = 'http://localhost:3000';
  public totalEntries = 50;
  public queryTotalCountParameter = 'x-total-count';
}
