import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {

  constructor(private service: RequestService) { }

  getCoverage(){
    return this.service.request(environment.coverage)
      .pipe(map((response: []) =>  response));
  }
}
