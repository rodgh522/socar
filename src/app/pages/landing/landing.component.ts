import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LandingService } from './landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [LandingService]
})
export class LandingComponent implements OnInit {

  images: string[];

  constructor(
    private _landingService: LandingService
  ) { 
    this.images = this._landingService.landingImgs;
  }

  ngOnInit(): void {
  }
}
