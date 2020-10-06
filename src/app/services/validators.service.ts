import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {


  constructor() { }

  inputValidate(value, form): any{
    return form.get(value).invalid && form.get(value).touched;
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
