import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { warnDeprecation } from 'data-view-angular/core/logger';
import { DvNoAnimationModule } from 'data-view-angular/core/no-animation';


export * from 'data-view-angular/core/animation';
export * from 'data-view-angular/core/environments';
export * from 'data-view-angular/core/logger';
export * from 'data-view-angular/core/no-animation';
export * from 'data-view-angular/core/types';
export * from 'data-view-angular/core/util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DataViewAngularModule { }
