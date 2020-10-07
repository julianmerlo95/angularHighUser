import { VehiclesService } from 'src/app/services/vehicles.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.scss']
})
export class VehicleDataComponent implements OnInit {
  enableButtonVersion: boolean;
  enableButtonModel: boolean;
  loadingVersion: boolean;
  selectDisable: boolean;
  loadingModel: boolean;
  loadingMarca: boolean;
  form: FormGroup;
  versiones: [];
  inputs: {}[];
  modelos: [];
  marcas: [];
  user: any;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private vehicleService: VehiclesService) {

    this.inputs = [{name: 'ano', placeholder: 'Año',
      msg: 'Ultimos 20 años', column: 'col-sm-4 col-md-11 col-lg-12'}];
    this.user = JSON.parse(localStorage.getItem('user'));
    this.enableButtonVersion = true;
    this.enableButtonModel = true;
    this.selectDisable = false;
    this.loadingMarca = true;
    this.vehicleService.getMarca().subscribe((response: []) => {
      this.loadingMarca = false;
      return this.marcas = response; });
    this.loadForm();
  }

  ngOnInit(): void {
  }

  loadForm(): any{
    this.form = this.formBuilder.group({
      marca : [this.user.vehicle ? this.user.vehicle[0].marca : '',
        [Validators.required]],
      ano : [this.user.vehicle ? this.user.vehicle[0].ano : '',
        [Validators.required, Validators.pattern('^[0-9]*$'), 
        Validators.min(2000), Validators.max(2020)]],
      modelo : [this.user.vehicle ? this.user.vehicle[0].modelo : '',
        [Validators.required]],
      version : [this.user.vehicle ? this.user.vehicle[0].version : ''],
    });
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
    if (this.form.invalid ){
      return this.statusInputsValidate();
    }
    const vehicle = this.form.value;
    localStorage.setItem('user',
      JSON.stringify({...this.user, vehicle: [vehicle]}));
    this.router.navigate(['/high/coverage']);
  }

  goBack(): any{
    this.router.navigate(['/high/information']);
  }

}
