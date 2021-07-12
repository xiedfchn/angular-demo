import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedUnitPipe } from './pipes/speed-unit.pipe';



@NgModule({
  declarations: [SpeedUnitPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SpeedUnitPipe
  ]
})
export class SharedModule { }
