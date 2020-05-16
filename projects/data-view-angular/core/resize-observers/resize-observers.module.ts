import { NgModule } from '@angular/core';
import { NzResizeObserverFactory } from './resize-observers.service';

@NgModule({
  providers: [NzResizeObserverFactory]
})
export class NzResizeObserversModule {}
