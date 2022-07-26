import { Component, OnInit } from '@angular/core'
import { registerElement } from '@nativescript/angular';
import { Carousel, CarouselItem } from '@nstudio/nativescript-carousel';

registerElement('Carousel', ()=> Carousel);
registerElement('CarouselItem', ()=> CarouselItem);

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  ngOnInit() {

  }

}
