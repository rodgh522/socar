import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinComponent } from './join.component';
import { JoinService } from './join.service';
import { NativeScriptRouterModule, NativeScriptCommonModule } from '@nativescript/angular';
import { Routes } from '@angular/router';
import { SharedModule } from '~/app/@core/shared.module';
import { Step1Component } from './step1/step1.component';
import { AgreementComponent } from './agreement/agreement.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  { path: '', component: Step1Component },
  { path: 'agreement', component: AgreementComponent },
  { path: 'verify', component: VerifyComponent },
];

@NgModule({
  declarations: [
    JoinComponent,
    Step1Component,
    AgreementComponent,
    VerifyComponent
  ],
  imports: [
    CommonModule, NativeScriptCommonModule, 
    NativeScriptRouterModule.forChild(routes),
    SharedModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ JoinService ]
})
export class JoinModule { }
