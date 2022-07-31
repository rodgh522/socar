import { Injectable } from '@angular/core';
import { BasicUserInfo, SubscribedEvent } from '~/app/@core/global/type';
import { setString } from '@nativescript/core/application-settings';

@Injectable()
export class JoinService {

  events: SubscribedEvent;
  basicInfo: BasicUserInfo;
  loginInfo: {
    loginId: string,
    pwd: string,
    inviteCode?: string
  };

  constructor() { }

  onSubmit() {
    const user = {
      ...this.events,
      ...this.basicInfo,
      ...this.loginInfo
    };

    let json = JSON.stringify(user);
    setString('storedUsers', json);
  }
  
}
