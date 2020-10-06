import { Validators} from '@angular/forms';

if (!localStorage.getItem('user')) {
  localStorage.setItem('user', JSON.stringify({}));
}
const user = JSON.parse(localStorage.getItem('user'));

export const formEstructure = {
  dni : [Object.keys(user).length > 1 && user.user ? user.user[0].dni : '' ,
    [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(7), Validators.maxLength(8)]],
  nombre : [Object.keys(user).length > 1 && user.user ? user.user[0].nombre : '' ,
    [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(15)]],
  apellido : [Object.keys(user).length > 1 && user.user ? user.user[0].apellido : '' ,
    [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(15)]],
  email : [Object.keys(user).length > 1 && user.user ? user.user[0].email : '' , [Validators.email]],
  celular : [Object.keys(user).length > 1 && user.user ? user.user[0].celular : '' ,
    [Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(15)]],
  telefono : [Object.keys(user).length > 1 && user.user ? user.user[0].telefono : '' ,
    [Validators.pattern('^[0-9]*$'), Validators.minLength(7), Validators.maxLength(15)]],
  FechaDeNacimiento : [Object.keys(user).length > 1 && user.user  ? user.user[0].FechaDeNacimiento : ''],
  provincia: [Object.keys(user).length > 1 && user.user ? user.user[0].provincia : '' , [Validators.required]],
  municipios: [Object.keys(user).length > 1 && user.user ? user.user[0].municipios : '' , [Validators.required]],
  domicilio: [Object.keys(user).length > 1 && user.user ? user.user[0].domicilio : '' , [Validators.minLength(3)]],
  usuario: [Object.keys(user).length > 1 && user.user ? user.user[0].usuario : '' ,
    [Validators.required]],
  contraseña: [Object.keys(user).length > 1 && user.user ? user.user[0].contraseña : '' ,
    [Validators.required, Validators.minLength(6)]]
};