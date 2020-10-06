import { input, inputsUserPass, inputsAdress } from '../../../features/input/inputData';
import { LocationService } from 'src/app/services/location.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { formEstructure } from './formEstructure';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  inputs:{}[];
  provincias: [];
  municipios: [];
  form: FormGroup;
  inputsAdress:{}[];
  inputsUserPass:{}[];
  loadingMuni: boolean;
  formEstructure: object
  loadingServices:boolean

  constructor(private formBuilder: FormBuilder,
              private locationService: LocationService,
              private router: Router) {
    this.inputs = input;
    this.loadingServices = true;
    this.inputsUserPass = inputsUserPass;
    this.inputsAdress = inputsAdress;
    this.formEstructure = formEstructure;
    this.locationService.getProvincia()
      .subscribe(response => 
        { this.loadingServices = false
          return this.provincias = response})
    this.loadForm();
  }
  
  ngOnInit(): void {
  }

  loadForm(): any{
    this.form = this.formBuilder.group(this.formEstructure);
  }

  getMuni():any{
    this.loadingMuni = true;
    this.locationService.getMunicipalidad(this.form.value.provincia)
      .subscribe(response => {
        this.loadingMuni = false;
        return this.municipios = response;
      });
  }

  validateStatusInputs(){
    if ( this.form.invalid ) {
      return Object.values( this.form.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          return Object.values( control.controls )
            .forEach( control => control.markAsTouched());
        } else {
          return control.markAsTouched();
        }
      });
    }
  }

  nextStep(): any{
    const user = JSON.parse(localStorage.getItem('user'));
    if(this.form.invalid ){
      return this.validateStatusInputs();
    }
    this.provincias.forEach((pro: any) => {if (pro.id === this.form.value.provincia){
                                          this.form.value.provincia = pro.nombre; }});
    localStorage.setItem('user', JSON.stringify({...user, user: [this.form.value]}));
    return this.router.navigate(['/high/vehicle']);
  }

}
