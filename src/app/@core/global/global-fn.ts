import { FormGroup } from '@angular/forms';

export function formToObj(form: FormGroup) {
  let obj: any = {};

  for (const key in form.controls) {
    obj[key] = form.controls[key].value;  
  }

  return obj;
}