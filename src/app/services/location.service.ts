import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from './request.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private service: RequestService) { }

  getLocation(){
    return this.service.request(environment.location.provincias)
      .pipe(map((response:any) => response.provincias));
  }
}
