import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formToObj } from '~/app/@core/global/global-fn';
import { FormVaildatorService } from '~/app/@core/service/form-vaildator.service';
import { JoinService } from './join.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  infoForm: FormGroup;

  constructor(
    private _joinService: JoinService,
    private _fb: FormBuilder,
    private _formValidatorService: FormVaildatorService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.infoForm = this._fb.group({
      loginId: ['', [ 
        Validators.required,
        Validators.email
      ]],
      pwd: ['', [ 
        Validators.required,
        Validators.pattern("^(?=.*[a-zA-Z0-9])(?=.*[a-zA-Z!`~@#$%^&*()_=+{}|?<>,./\-])(?=.*[a-z0-9!`~@#$%^&*()_=+{}|?<>,./\-])(?=.*[A-Z0-9!`~@#$%^&*()_=+{}|?<>,./\-]).{8,}$") // 대문자, 소문자, 숫자, 특수문자 중 2개조합 8자리이상
      ]],
      rePwd: ['', [
        Validators.required,
        this._formValidatorService.equalTo('pwd')
      ]],
      inviteCode: ['']
    });
  }

  onSubmit() {
    const loginInfo = formToObj(this.infoForm);
    delete loginInfo.rePwd;

    this._joinService.loginInfo = loginInfo;
    this._joinService.onSubmit();
  }
  
}
