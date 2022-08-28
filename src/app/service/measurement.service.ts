import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MeasurementService {

  constructor(private http: HttpClient) { }

  getData(): any {
    const URL = 'assets/measurement_data.xlsx';
    return this.http.get(URL, { responseType: 'arraybuffer' });
  }
}
