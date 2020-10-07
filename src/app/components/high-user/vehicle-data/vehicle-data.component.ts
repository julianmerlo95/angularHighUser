import { VehiclesService } from 'src/app/services/vehicles.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { formEstructure } from './formEstructure';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.scss']
})
export class VehicleDataComponent implements OnInit {
  marcas: [];
  modelos: [];
  inputs: {}[];
  versiones: [];
  form: FormGroup;
  loadingMarca: boolean;
  loadingModel: boolean;
  selectDisable: boolean;
  loadingVersion: boolean;
  enableButtonModel: boolean;
  enableButtonVersion: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private vehicleService: VehiclesService) {
    this.inputs = [{name: 'ano', placeholder: 'Año',
      msg: 'Ultimos 20 años', column: 'col-sm-4 col-md-11 col-lg-12'}];
    this.enableButtonVersion = true;
    this.enableButtonModel = true;
    this.selectDisable = false;
    this.loadingMarca = true
    this.vehicleService.getMarca().subscribe((response: []) => {
      this.loadingMarca = false
      return this.marcas = response})
    this.loadForm();
  }

  ngOnInit(): void {
  }

  loadForm(): any{
    this.form = this.formBuilder.group(formEstructure);
  }

  getModelo(): any{
    this.loadingModel = true;
    this.vehicleService.getModelo(this.form.value.marca,
        this.form.value.ano)
        .subscribe((response: []) => {
          this.modelos = response;
          this.loadingModel = false;
          this.enableButtonModel = false;
    });
  }

  getVersion(): any{
    this.loadingVersion = true;
    this.vehicleService.getVersion(this.form.value.marca,
            this.form.value.ano, this.form.value.modelo)
        .subscribe((response: []) => {
          this.loadingVersion = false;
          this.versiones = response;
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
    const user: any = JSON.parse(localStorage.getItem('user'));
    if (this.form.invalid ){
      return this.statusInputsValidate();
    }
    const vehicle = this.form.value;
    localStorage.setItem('user',
      JSON.stringify({...user, vehicle: [vehicle]}));
    this.router.navigate(['/high/coverage']);
  }

  goBack(): any{
    localStorage.setItem('user',
      JSON.stringify({user: this.form.value}));
    this.router.navigate(['/high/information']);
  }

}
