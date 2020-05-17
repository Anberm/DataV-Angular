import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderBox6Component } from './border-box-6.component';
import { DvResizeObserversModule } from 'data-view-angular/core/resize-observers';

@NgModule({
  declarations: [BorderBox6Component],
  exports: [BorderBox6Component],
  imports: [CommonModule, DvResizeObserversModule]
})
export class BorderBox6Module {}
