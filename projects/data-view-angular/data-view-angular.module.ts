import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { warnDeprecation } from 'data-view-angular/core/logger';
import { DvNoAnimationModule } from 'data-view-angular/core/no-animation';
import { BorderBox1Module } from 'data-view-angular/border-box-1';
import { BorderBox2Module } from 'data-view-angular/border-box-2';
import { BorderBox3Module } from 'data-view-angular/border-box-3';
import { BorderBox4Module } from 'data-view-angular/border-box-4';
import { BorderBox5Module } from 'data-view-angular/border-box-5';

export * from 'data-view-angular/core/animation';
export * from 'data-view-angular/core/environments';
export * from 'data-view-angular/core/logger';
export * from 'data-view-angular/core/no-animation';
export * from 'data-view-angular/core/types';
export * from 'data-view-angular/core/util';
export * from 'data-view-angular/border-box-1';
export * from 'data-view-angular/border-box-2';
export * from 'data-view-angular/border-box-3';
export * from 'data-view-angular/border-box-4';
export * from 'data-view-angular/border-box-5';

@NgModule({
  exports: [BorderBox1Module, BorderBox2Module, BorderBox3Module, BorderBox4Module, BorderBox5Module]
})
export class DataViewAngularModule {
  constructor() {
    warnDeprecation(
      "The `DataViewAngularModule` has been deprecated and will be removed in 10.0.0. Please use secondary entry instead.\ne.g. `import { BorderBox1Module } from 'data-view-angular/border-box1';`"
    );
  }
}
