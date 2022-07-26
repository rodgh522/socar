import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinComponent } from './join.component';
import { JoinService } from './join.service';

@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ JoinService ]
})
export class JoinModule { }
