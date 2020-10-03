import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  inputValidate(value, form){        
    return form.get(value).invalid && form.get(value).touched; 
  }
}
