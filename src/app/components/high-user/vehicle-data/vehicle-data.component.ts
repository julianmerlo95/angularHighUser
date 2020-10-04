import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/services/validators.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.scss']
})
export class VehicleDataComponent implements OnInit {
  inputs;
  form: FormGroup;
  marcas: [];
  modelos: [];
  versiones: [];
  selectDisable: boolean;
  loadingModel: boolean;
  loadingVersion: boolean;
  enableButtonModel: boolean;
  enableButtonVersion: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private vehicleService: VehiclesService,
              private valiatorService: ValidatorsService) {
    this.vehicleService.getMarca().subscribe((response: []) => this.marcas = response);
    this.inputs = [{name: 'ano', placeholder: 'Año', msg: 'Ultimos 20 años'}];
    this.loadForm();
    this.selectDisable = false;
    this.enableButtonModel = true;
    this.enableButtonVersion = true;
  }

  ngOnInit(): void {
  }

  loadForm(): any{
    const user = JSON.parse(localStorage.getItem('user'));

    this.form = this.formBuilder.group({
      marca : [user.vehicle ? user.vehicle[0].marca : '',
        [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
      ano : [user.vehicle ? user.vehicle[0].ano : '',
        [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(2000), Validators.max(2020)]],
      modelo : [user.vehicle ? user.vehicle[0].modelo : '',
        [Validators.required]],
      version : [user.vehicle ? user.vehicle[0].version : '',
        [Validators.required, Validators.email]],
    });
  }

  getModelo(): any{
    this.loadingModel = true;
    this.vehicleService.getModelo(this.form.value.marca, this.form.value.ano)
        .subscribe((response: []) => {                    
          this.modelos = response;
          this.loadingModel = false;
          this.enableButtonModel = false;
    });
  }

  getVersion(): any{
    this.loadingVersion = true;
    this.vehicleService.getVersion(this.form.value.marca, this.form.value.ano, this.form.value.modelo)
        .subscribe((response: []) => {
          this.loadingVersion = false;
          this.versiones = response;
    });
  }

  nextStep(): any{
    // if ( this.form.invalid ) {
    //   return Object.values( this.form.controls ).forEach( control => {
    //     if ( control instanceof FormGroup ) {
    //       return Object.values( control.controls ).forEach( control => control.markAsTouched() );
    //     } else {
    //       return control.markAsTouched();
    //     }
    //   });
    // }
    const user: any = JSON.parse(localStorage.getItem('user'));
    const vehicle = this.form.value;
    localStorage.setItem('user', JSON.stringify({...user, vehicle: [vehicle]}));
    this.router.navigate(['/high/coverage']);
  }

  goBack(): any{
    localStorage.setItem('user', JSON.stringify({user: this.form.value}));
    this.router.navigate(['/high/information']);
  }

}
