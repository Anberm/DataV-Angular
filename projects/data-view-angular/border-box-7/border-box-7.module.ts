import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderBox7Component } from './border-box-7.component';
import { DvResizeObserversModule } from 'data-view-angular/core/resize-observers';

@NgModule({
  declarations: [BorderBox7Component],
  exports: [BorderBox7Component],
  imports: [CommonModule, DvResizeObserversModule]
})
export class BorderBox6Module {}
