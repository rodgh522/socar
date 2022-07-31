import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { kakao, KakaoLogin } from 'nativescript-kakao-login';
import { User } from '~/app/@core/global/type';
import { LoginService } from './login.service';

const failMsg = `아이디나 패스워드를 확인해주세요.`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginId: FormControl;
  pwd: FormControl;
  isFailed: boolean;
  failMsg = failMsg;
  
  constructor(
    private _loginService: LoginService
  ) { 
    this.loginId = new FormControl('', [Validators.email, Validators.required]);
    this.pwd = new FormControl('', [Validators.required]);
    this.isFailed = false;
  }

  ngOnInit(): void {
  }

  onLogin() {
    this._loginService.onLogin(this.loginId.value, this.pwd.value)
    .then((res: User) => {
      if (res) {
        this._loginService.setUserSession(res);
      } else {
        this.isFailed = true;
      }
    });
  }

  kakao() {
    kakao.init();
  }

}
