import { coerceElement } from '@angular/cdk/coercion';
import { Directive, OnChanges, AfterViewInit, Input, ElementRef, Renderer2, Optional, Inject } from '@angular/core';

@Directive({
  selector: '[dvNoAnimation]',
  exportAs: 'dvNoAnimation'
})
export class DvNoAnimationDirective implements OnChanges, AfterViewInit {
  static ngAcceptInputType_nzNoAnimation: BooleanInput;

  @Input() @InputBoolean() nzNoAnimation: boolean = false;

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
    if (this.nzNoAnimation || this.animationType === 'NoopAnimations') {
      this.renderer.addClass(element, DISABLED_CLASSNAME);
    } else {
      this.renderer.removeClass(element, DISABLED_CLASSNAME);
    }
  }
}
