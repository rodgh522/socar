import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinComponent } from './join.component';
import { JoinService } from './join.service';
import { NativeScriptRouterModule, NativeScriptCommonModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: JoinComponent }
];

@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule, NativeScriptCommonModule, 
    NativeScriptRouterModule.forChild(routes)
  ],
  providers: [ JoinService ]
})
export class JoinModule { }
