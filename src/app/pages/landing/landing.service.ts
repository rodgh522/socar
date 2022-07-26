import { Injectable } from '@angular/core';

@Injectable()
export class LandingService {

  landingImgs: string[];
  
  constructor() { 
    this.landingImgs = [
      '~/assets/images/loading1.png',
      '~/assets/images/loading2.png',
      '~/assets/images/loading3.png',
      '~/assets/images/loading4.png',
      '~/assets/images/loading5.png',
    ];
  }
}
