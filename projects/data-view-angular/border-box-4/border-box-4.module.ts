import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderBox4Component } from './border-box-4.component';
import { DvResizeObserversModule } from 'data-view-angular/core/resize-observers';

@NgModule({
  declarations: [BorderBox4Component],
  exports: [BorderBox4Component],
  imports: [CommonModule, DvResizeObserversModule]
})
export class BorderBox4Module {}
