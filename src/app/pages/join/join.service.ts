import { Injectable } from '@angular/core';
import { Agreement } from '~/app/@core/global/type';

@Injectable()
export class JoinService {

  agreement: Agreement;

  constructor() { 
    this.agreement = {
      terms: false,
      privacy: false,
      location: false,
      push: false,
      SMS: false,
      email: false
    };
  }
}
