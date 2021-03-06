import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private service: RequestService) { }

  getProvincia(): any{
    return this.service.request(environment.location.provincias)
      .pipe(map((response: any) => response.provincias));
  }

  getMunicipalidad(id): any{
    return this.service.request
      (`${environment.location.municipios}?provincia=${id}&campos=id,nombre&max=135`)
      .pipe(map((response: any) => response.municipios));
  }
}
