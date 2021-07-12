import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedUnitPipe } from './pipes/speed-unit.pipe';
import { ToolTipDirective } from './diretives/tool-tip.directive';



@NgModule({
  declarations: [SpeedUnitPipe, ToolTipDirective],
  imports: [
    CommonModule
  ],
  exports: [
    SpeedUnitPipe,
    ToolTipDirective
  ]
})
export class SharedModule { }
