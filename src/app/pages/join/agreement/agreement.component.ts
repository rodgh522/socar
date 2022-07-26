import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JoinService } from '../join.service';
import { formToObj } from '~/app/@core/global/global-fn';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit, OnDestroy {

  requireForm: FormGroup;
  optionalForm: FormGroup;
  termsAll: boolean;
  requireAll: boolean;
  optionalAll: boolean;
  _unsubscribe: Subscription;
  
  constructor(
    private _joinService: JoinService,
    private _fb: FormBuilder
  ) { 
    this.termsAll = false;
    this.requireAll = false;
    this.optionalAll = false;
    this._unsubscribe = new Subscription;
  }

  ngOnInit(): void {
    this.initForm();
    this.watchTerms();
  }

  ngOnDestroy(): void {
    this._unsubscribe.unsubscribe();    
  }

  initForm() {
    this.requireForm = this._fb.group({
      terms: [false, [ Validators.requiredTrue ]],
      privacy: [false, [ Validators.requiredTrue ]],
      location: [false, [ Validators.requiredTrue ]]
    });

    this.optionalForm = this._fb.group({
      push: [false],
      SMS: [false],
      email: [false]
    });
  }
  
  watchTerms() {
    this._unsubscribe.add(
      this.requireForm.statusChanges.subscribe(res => {
        if (/^VALID$/.test(res)) {
          this.requireAll = true;
        } else {
          this.termsAll = false;
        }
      })
    );

    this._unsubscribe.add(
      this.optionalForm.valueChanges.subscribe(res => {
        const values = Object.values(res);
        this.optionalAll = values.includes(true) ? true : false;
  
        if (!this.optionalAll) {
          this.termsAll = false;
        }
      })
    );
  }

  setPolicyAgree(group: FormGroup, target: string) {
    let preVal = group.value[target];
    group.get(target).setValue(!preVal);
  }

  setTermsAll() {
    this.termsAll = !this.termsAll;

    this.setGroupAll(this.optionalForm, this.termsAll, 'optionalAll');
    this.setGroupAll(this.requireForm, this.termsAll, 'requireAll');
  }
  
  setGroupAll(group: FormGroup, value: boolean, target: string) {
    this[target] = value;
    for (const key in group.controls) {
      group.get(key).setValue(value);
    }
  }

  nextPhase() {
    this._joinService.events = formToObj(this.optionalForm);
  }
}
