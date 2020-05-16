import { NgModule } from '@angular/core';
import { DvResizeObserverFactory } from './resize-observers.service';

@NgModule({
  providers: [DvResizeObserverFactory]
})
export class DvResizeObserversModule {}
