import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {


  constructor(private service: RequestService,
              public http: HttpClient) { }

  inputValidate(value, form): any{
    return form.get(value).invalid && form.get(value).touched;
  }

//   validateUser(control: FormControl): Promise<any> | Observable<any>{
//     console.log(control.value);
//     return this.service.request(`${environment.user}miguel`)
//       .pipe(map((response: any) => console.log(response)));
// }

  dateValidate(date: FormControl): any{
      const convertAge = new Date(date.value);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      const response = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      if (response >= 18 && response < 99){
        return null;
      }
      return { valdiate: true };
  }
}
