import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.sass']
})
export class PersonalInformationComponent implements OnInit {

  inputs;
  inputsUserPass;
  provincias:[];
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private locationService: LocationService,
              private userService: UserService,
              private router: Router) { 
    this.inputs = [{name:'dni', placeholder:'Dni'},{name:'nombre', placeholder:'Nombre'},
                  {name:'apellido', placeholder:'Apellido'},{name:'email', placeholder:'E-mail'},
                  {name:'celular', placeholder:'Celular'},{name:'telefono', placeholder:'Telefono'},
                  {name:'FechaDeNacimiento', placeholder:'Fecha de Nacimiento'}];
    this.inputsUserPass = [{name:'usuario',message:'Ya existe el usuario', placeholder:'Usuario'},
                          {name:'contraseña',message: 'requerido', placeholder:'Contraseña'}]
    this.locationService.getLocation().subscribe(response => this.provincias = response)
    this.loadForm();
  }

  ngOnInit(): void {
  }

  loadForm(){
    this.form = this.formBuilder.group({
      dni :['', [Validators.required, Validators.minLength(7),Validators.maxLength(8)]],
      nombre :['', [Validators.required, Validators.minLength(2),Validators.maxLength(15)]],
      apellido :['', [Validators.required, Validators.minLength(2),Validators.maxLength(15)]],
      email :['', [Validators.required, Validators.email]],
      celular :['', [Validators.required]],
      telefono :['', [Validators.required]],
      FechaDeNacimiento : ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      usuario: ['',[Validators.required, this.userService.valdiate]],
      contraseña: ['']
    })
  }

  nextStep(){
    localStorage.setItem('user',JSON.stringify({user:this.form.value}));
    this.router.navigate(['/high/vehicle']);
  }

}
