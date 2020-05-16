import { coerceElement } from '@angular/cdk/coercion';
import { Directive, OnChanges, AfterViewInit, Input, ElementRef, Renderer2, Optional, Inject } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { BooleanInput } from 'data-view-angular/core/types';
import { InputBoolean } from 'data-view-angular/core/util';

const DISABLED_CLASSNAME = 'dv-animate-disabled';

@Directive({
  selector: '[dvNoAnimation]',
  exportAs: 'dvNoAnimation'
})
export class DvNoAnimationDirective implements OnChanges, AfterViewInit {
  static ngAcceptInputType_dvNoAnimation: BooleanInput;

  @Input() @InputBoolean() dvNoAnimation: boolean = false;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) private animationType: string
  ) {}

  ngOnChanges(): void {
    this.updateClass();
  }

  ngAfterViewInit(): void {
    this.updateClass();
  }

  private updateClass(): void {
    const element = coerceElement(this.element);
    if (!element) {
      return;
    }
    if (this.dvNoAnimation || this.animationType === 'NoopAnimations') {
      this.renderer.addClass(element, DISABLED_CLASSNAME);
    } else {
      this.renderer.removeClass(element, DISABLED_CLASSNAME);
    }
  }
}
