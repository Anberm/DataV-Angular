import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvNoAnimationDirective } from './dv-no-animation.directive';

@NgModule({
  declarations: [DvNoAnimationDirective],
  exports: [DvNoAnimationDirective],
  imports: [CommonModule]
})
export class DvNoAnimationModule {}
