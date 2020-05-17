import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderBox1Component } from './border-box1.component';
import { DvResizeObserversModule } from 'data-view-angular/core/resize-observers';

@NgModule({
  declarations: [BorderBox1Component],
  exports: [BorderBox1Component],
  imports: [CommonModule, DvResizeObserversModule]
})
export class BorderBox1Module {}
