import { Component, OnInit } from '@angular/core';
import { Agreement } from '~/app/@core/global/type';
import { JoinService } from '../join.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

  agreement: Agreement;
  checkAll: boolean;
  requireAll: boolean;
  optionalAll: boolean;
  checked = true;
  
  constructor(
    private _joinService: JoinService
  ) { 
    this.agreement = this._joinService.agreement;
    this.checkAll = false;
    this.requireAll = false;
    this.optionalAll = false;
  }

  ngOnInit(): void {
  }
  
  watchRequires() {
    this.requireAll = this.agreement.terms && this.agreement.privacy && this.agreement.location;
    return this.requireAll;
  }
}
