import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  @Input() title: string;
  
  constructor(
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  back() {
    this._location.back();
  }
}
