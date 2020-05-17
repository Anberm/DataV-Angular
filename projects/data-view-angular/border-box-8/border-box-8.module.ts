import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderBox8Component } from './border-box-8.component';
import { DvResizeObserversModule } from 'data-view-angular/core/resize-observers';

@NgModule({
  declarations: [BorderBox8Component],
  exports: [BorderBox8Component],
  imports: [CommonModule, DvResizeObserversModule]
})
export class BorderBox8Module {}
