
export const input = [{name: 'dni', placeholder: 'Dni', msg: 'Solo ingrese numeros, minimo 7 numeros'}, {name: 'nombre', placeholder: 'Nombre', msg: 'Solo ingrese letras'},
{name: 'apellido', placeholder: 'Apellido', msg: 'Solo ingrese letras'}, {name: 'email', placeholder: 'E-mail', msg: 'Verifique el formato del correo'},
{name: 'celular', placeholder: 'Celular', msg: 'Solo ingrese numeros, minimo 10 numeros'}, {name: 'telefono', placeholder: 'Telefono', msg: 'Solo ingrese numeros, minimo 7 numeros'},
{name: 'FechaDeNacimiento', placeholder: 'Fecha de Nacimiento', msg: 'Debe ser mayor a 18 años y menos a 99 años', type: 'date', column: 'col-sm-4 col-md-12 col-lg-12'}];

export const inputsUserPass = [{name: 'usuario', placeholder: 'Usuario', msg: 'Ya existe el usuario'},
                                {name: 'contraseña', placeholder: 'Contraseña', type: 'password', msg: 'Ingrese minimo 6 caracteres'}];
export const inputsAdress = [{name: 'domicilio', placeholder: 'Domicilio', msg: 'Ingrese minimo 3 letras',column: 'col-sm-4 col-md-11 col-lg-12'}];