const user = JSON.parse(localStorage.getItem('user'));
import {Validators} from '@angular/forms';

export const formEstructure = {
  marca : [user.vehicle ? user.vehicle[0].marca : '',
    [Validators.required]],
  ano : [user.vehicle ? user.vehicle[0].ano : '',
    [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(2000), Validators.max(2020)]],
  modelo : [user.vehicle ? user.vehicle[0].modelo : '',
    [Validators.required]],
  version : [user.vehicle ? user.vehicle[0].version : ''],
};
