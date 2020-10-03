import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private service: RequestService) { }

  getMarca(){
    return this.service.request(environment.vehicles.marca)
      .pipe(map(response => response))
  }

  getModelo(codigo, año){
    return this.service.request(`${environment.vehicles.marca}/${codigo}/${año}`)
      .pipe(map(response => response))
  }

  getVersion(codigo, año, modelo){
    return this.service.request(`${environment.vehicles.marca}/${codigo}/${año}/${modelo}`)
      .pipe(map(response => response))
  }
}