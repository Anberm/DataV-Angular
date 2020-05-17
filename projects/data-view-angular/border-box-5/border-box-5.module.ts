import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderBox5Component } from './border-box-5.component';
import { DvResizeObserversModule } from 'data-view-angular/core/resize-observers';

@NgModule({
  declarations: [BorderBox5Component],
  exports: [BorderBox5Component],
  imports: [CommonModule, DvResizeObserversModule]
})
export class BorderBox5Module {}
