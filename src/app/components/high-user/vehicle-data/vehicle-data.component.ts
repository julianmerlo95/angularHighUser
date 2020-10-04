import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/services/validators.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.sass']
})
export class VehicleDataComponent implements OnInit {
  inputs;
  form: FormGroup;
  marcas: []
  modelos: []
  versiones: []
  selectDisable: boolean;
  loadingModel: boolean;
  loadingVersion: boolean;
  enableButtonModel: boolean;
  enableButtonVersion: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private vehicleService: VehiclesService,
              private valiatorService: ValidatorsService) {
    this.vehicleService.getMarca().subscribe((response:[])=> this.marcas = response)
    this.inputs = [{name:'ano',message: 'requerido'}];
    this.loadForm();
    this.selectDisable = false;
    this.enableButtonModel = true;
    this.enableButtonVersion = true;
  }

  ngOnInit(): void {
  }

  loadForm(){
    this.form = this.formBuilder.group({
      marca :['', [Validators.required, Validators.minLength(7),Validators.maxLength(8)]],
      ano :['', [Validators.required]],
      modelo :['', [Validators.required]],
      version :['', [Validators.required, Validators.email]],
    })
  }

  getModelo(){
    this.loadingModel = true;  
    this.vehicleService.getModelo(this.form.value.marca,this.form.value.ano)
        .subscribe((response:[])=> {
          this.modelos = response;
          this.loadingModel = false;   
          this.enableButtonModel = false;       
    })
  }

  getVersion(){
    this.loadingVersion = true;  
    this.vehicleService.getVersion(this.form.value.marca, this.form.value.ano, this.form.value.modelo)
        .subscribe((response:[])=> {
          this.loadingVersion = false;  
          console.log(response);
          this.versiones = response;
    })    
  }

  nextStep(){
    const user:any = JSON.parse(localStorage.getItem('user'));
    const vehicle = this.form.value;
    localStorage.setItem('user', JSON.stringify({...user, vehicle}));
    this.router.navigate(['/high/coverage']);
  }

  goBack(){
    localStorage.setItem('user',JSON.stringify({user:this.form.value}));
    this.router.navigate(['/high/information']);
  }

}
