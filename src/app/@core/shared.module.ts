import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarComponent } from './component/action-bar/action-bar.component';
import { NativeScriptCommonModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    ActionBarComponent
  ],
  imports: [
    CommonModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    ActionBarComponent
  ]
})
export class SharedModule { }
