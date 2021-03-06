import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderBox3Component } from './border-box-3.component';
import { DvResizeObserversModule } from 'data-view-angular/core/resize-observers';

@NgModule({
  declarations: [BorderBox3Component],
  exports: [BorderBox3Component],
  imports: [CommonModule, DvResizeObserversModule]
})
export class BorderBox3Module {}
