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

  validate(control: FormControl): {[s: string]: boolean}{
    if (control.value === 'julian'){
      return{valdiate: true};
    }
    return null;
  }

  userValidate(user): any{
    return this.service.request(environment.user)
      .pipe(map((response: any) => response.provincias));
  }

  dateValidate(date: FormControl): any{
      const convertAge = new Date(date.value);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      const response = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      console.log(response);
      if(response >= 18 && response < 99){
        return null;
      }
      return { valdiate: true };
  }

}
