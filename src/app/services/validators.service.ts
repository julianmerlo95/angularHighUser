import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {


  constructor(private service: RequestService,
              public http: HttpClient) { }

  inputValidate(value, form): any{
    return form.get(value).invalid && form.get(value).touched;
  }

  userValidate(value): any{
    return this.service.request(`${environment.user}?nombre=${value}`)
      .pipe(map((response: any) => response));
}

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
