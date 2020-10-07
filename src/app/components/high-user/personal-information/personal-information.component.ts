import { input, inputsUserPass, inputsAdress } from '../../../features/input/inputData';
import { ValidatorsService } from 'src/app/services/validators.service';
import { LocationService } from 'src/app/services/location.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators} from '@angular/forms';


@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  loadingServices: boolean;
  formEstructure: object;
  loadingMuni: boolean;
  inputsUserPass: {}[];
  inputsAdress: {}[];
  form: FormGroup;
  municipios: [];
  provincias: [];
  inputs: {}[];

  constructor(private formBuilder: FormBuilder,
              private locationService: LocationService,
              private validatorService: ValidatorsService,
              private router: Router) {
    this.inputsUserPass = inputsUserPass;
    this.inputsAdress = inputsAdress;
    this.loadingServices = true;
    this.inputs = input;
    this.locationService.getProvincia()
      .subscribe(response => {
          this.loadingServices = false;
          return this.provincias = response; });
    this.loadForm();
  }

  ngOnInit(): void {
  }

loadForm(): any{
  const user = JSON.parse(localStorage.getItem('user'));

  this.form = this.formBuilder.group({
    dni : [Object.keys(user).length >= 1 && user.user ? user.user[0].dni : '' ,
      [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(7), Validators.maxLength(8)]],
    nombre : [Object.keys(user).length >= 1 && user.user ? user.user[0].nombre : '' ,
      [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(15)]],
    apellido : [Object.keys(user).length >= 1 && user.user ? user.user[0].apellido : '' ,
      [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(15)]],
    email : [Object.keys(user).length >= 1 && user.user ? user.user[0].email : '' , [Validators.email]],
    celular : [Object.keys(user).length >= 1 && user.user ? user.user[0].celular : '' ,
      [Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(15)]],
    telefono : [Object.keys(user).length >= 1 && user.user ? user.user[0].telefono : '' ,
      [Validators.pattern('^[0-9]*$'), Validators.minLength(7), Validators.maxLength(15)]],
    FechaDeNacimiento : [Object.keys(user).length >= 1 && user.user  ? user.user[0].FechaDeNacimiento : '',
      [this.validatorService.dateValidate]],
    provincia: [Object.keys(user).length >= 1 && user.user ? user.user[0].provincia : '' , [Validators.required]],
    municipios: [Object.keys(user).length >= 1 && user.user ? user.user[0].municipios : '' , [Validators.required]],
    domicilio: [Object.keys(user).length >= 1 && user.user ? user.user[0].domicilio : '' , [Validators.minLength(3),
      Validators.pattern("^[a-zA-Z0-9 ]+$")]],
    usuario: [Object.keys(user).length >= 1 && user.user ? user.user[0].usuario : '' , [Validators.required,
      Validators.pattern("^[a-zA-Z0-9 ]+$")]],
    contraseña: [Object.keys(user).length >= 1 && user.user ? user.user[0].contraseña : '' ,
      [Validators.required, Validators.minLength(6), Validators.pattern("^[a-zA-Z0-9 ]+$")]]
  });
  }

  getMuni(): any{
    this.loadingMuni = true;
    this.locationService.getMunicipalidad(this.form.value.provincia)
      .subscribe(response => {
        this.loadingMuni = false;
        return this.municipios = response;
      });
  }

  statusInputsValidate(): any{
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
    if (this.form.invalid ){
      return this.statusInputsValidate();
    }
    this.provincias.forEach((pro: any) => {if (pro.id === this.form.value.provincia){
      this.form.value.provincia = pro.nombre; }});
    localStorage.setItem('user', JSON.stringify({...user, user: [this.form.value]}));
    return this.router.navigate(['/high/vehicle']);
  }

}
