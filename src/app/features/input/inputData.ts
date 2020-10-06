
export const input = [{name: 'dni', placeholder: 'Dni', msg: 'Solo ingrese numeros'}, {name: 'nombre', placeholder: 'Nombre', msg: 'Solo ingrese letras'},
{name: 'apellido', placeholder: 'Apellido', msg: 'Solo ingrese letras'}, {name: 'email', placeholder: 'E-mail', msg: 'Error en el formato del correo'},
{name: 'celular', placeholder: 'Celular', msg: 'Solo ingrese numeros'}, {name: 'telefono', placeholder: 'Telefono', msg: 'Solo ingrese numeros'},
{name: 'FechaDeNacimiento', placeholder: 'Fecha de Nacimiento', msg: 'Debe ser mayor a 18 años y menos a 99 años', type: 'date', column: 'col-sm-4 col-md-12 col-lg-12'}];

export const inputsUserPass = [{name: 'usuario', placeholder: 'Usuario', msg: 'Ya existe el usuario'},
                                {name: 'contraseña', placeholder: 'Contraseña', msg: 'requerido'}];
export const inputsAdress = [{name: 'domicilio', placeholder: 'Domicilio', msg: 'Ingrese minimo 3 letras',column: 'col-sm-4 col-md-11 col-lg-12'}];