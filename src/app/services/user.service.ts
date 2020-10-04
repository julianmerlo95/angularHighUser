import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private service: RequestService) { }

  valdiate(control: FormControl): {[s: string]: boolean}{
    if (control.value === 'julian'){
      return{valdiate: true};
    }
    return null;
  }

  userValidate(user): any{
    return this.service.request(environment.user)
      .pipe(map((response: any) => response.provincias));
  }

}
