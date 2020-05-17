import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderBox2Component } from './border-box-2.component';
import { DvResizeObserversModule } from 'data-view-angular/core/resize-observers';

@NgModule({
  declarations: [BorderBox2Component],
  exports: [BorderBox2Component],
  imports: [CommonModule, DvResizeObserversModule]
})
export class BorderBox2Module {}
