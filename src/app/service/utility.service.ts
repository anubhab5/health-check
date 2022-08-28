import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  convertExcelToJSON(resp: any) {
    let workBookData: any = {};
    let workBook = XLSX.read(resp, { type: 'binary' });
    let jsonData = workBook.SheetNames.reduce((initial, name) => {
      const sheet = workBook.Sheets[name];
      workBookData[name] = XLSX.utils.sheet_to_json(sheet, {
        raw: false,
        dateNF: 'dd"."mm"."yyyy'
      });
      return XLSX.utils.sheet_to_json(sheet);
    }, {});
    return workBookData;
  }
}
