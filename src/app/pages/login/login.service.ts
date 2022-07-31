import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getString, setString } from '@nativescript/core/application-settings';
import { User } from '~/app/@core/global/type';

@Injectable()
export class LoginService {

  storedUsers: User[];
  
  constructor(
    private _router: Router
  ) { 
    const json = getString('storedUsers');
    const users: User[] = JSON.parse(json ?? '[]');
    this.storedUsers = users;
  }

  onLogin(id: string, pwd: string) {
    return new Promise(resolve => {
      const user = this.storedUsers.filter(a => a.loginId === id && a.pwd === pwd).pop();

      resolve(user);
    });
  }

  setUserSession(user: User) {
    const json = JSON.stringify(user);
    setString('user', json);

    this._router.navigateByUrl('/main');
  }
}
