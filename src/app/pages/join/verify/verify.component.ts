import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formToObj } from '~/app/@core/global/global-fn';
import { JoinService } from '../join.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  serviceTerm: FormGroup;
  termAll: boolean;
  userInfo: FormGroup;

  constructor(
    private _joinService: JoinService,
    private _fb: FormBuilder
  ) { 
    this.termAll = false;
  }

  ngOnInit(): void {
    this.initForm();  
    this.watchServiceTerm();
  }

  initForm() {
    this.serviceTerm = this._fb.group({
      privacy: [false, [ Validators.requiredTrue ]],
      unique: [false, [ Validators.requiredTrue ]],
      service: [false, [ Validators.requiredTrue ]],
      telecom: [false, [ Validators.requiredTrue ]],
      third: [false, [ Validators.requiredTrue ]],
    });

    this.userInfo = this._fb.group({
      userName: ['', [ Validators.required] ],
      dateOfBirth: ['', [
        Validators.required,
        Validators.min(6),
        Validators.pattern('^[0-9]+$')
      ]],
      firstNum: ['', [
        Validators.required,
        Validators.pattern('[0-9]')
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10,11}$')
      ]]
    });
  }

  watchServiceTerm() {
    this.serviceTerm.statusChanges.subscribe(res => {
      if (/^VALID$/.test(res)) {
        this.termAll = true;
      } 
    });
  }

  setPolicyAgree(target: string) {
    let preVal = this.serviceTerm.value[target];
    this.serviceTerm.get(target).setValue(!preVal);
  }

  setTermsAll() {
    this.termAll = !this.termAll;
    for (const key in this.serviceTerm.controls) {
      this.serviceTerm.get(key).setValue(this.termAll);
    }
  }

  nextPhase() {
    this._joinService.basicInfo = formToObj(this.userInfo);
  }
  
}
