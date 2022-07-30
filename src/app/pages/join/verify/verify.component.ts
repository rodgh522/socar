import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  checked = false;
  verifyTerms: any;

  constructor(
  ) { 
    this.verifyTerms = {};
  }

  ngOnInit(): void {
    
  }

  openOption(){}
}
