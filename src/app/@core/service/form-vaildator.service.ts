import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormVaildatorService {

  constructor() { }

  equalTo(field: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let isValid = control.root.value[field] === control.value;
      return isValid ? null : { equalTo: { isValid} };
    }
  }

}
