import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  Renderer2,
  ViewEncapsulation,
  Input,
  OnInit
} from '@angular/core';
import { DvResizeObserver } from 'data-view-angular/core/resize-observers';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dv-border-box-1',
  exportAs: 'dvBorderBox1',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './border-box-1.component.svg',
  styleUrls: ['./border-box-1.component.less'],
  host: {
    '[class.dv-border-box-1]': `true`
  }
})
export class BorderBox1Component implements OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  defaultColor: [string, string] = ['#4fd2dd', '#235fa7'];
  mergedColor = Object.assign([], this.defaultColor);
  borderPosition = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];
  width = 0;
  height = 0;
  point1 = '';

  @Input() dvBackgroundColor: string = 'transparent';

  @Input()
  set dvColor(v: [string, string]) {
    this.mergedColor = Object.assign([], this.defaultColor, v);
  }

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    private dvResizeObserver: DvResizeObserver
  ) {}

  updatePoints() {
    this.point1 = `10, 27 10, ${this.height - 27} 13, ${this.height - 24} 13, ${this.height - 21} 24, ${this.height - 11}
    38, ${this.height - 11} 41, ${this.height - 8} 73, ${this.height - 8} 75, ${this.height - 10} 81, ${this.height - 10}
    85, ${this.height - 6} ${this.width - 85}, ${this.height - 6} ${this.width - 81}, ${this.height - 10} ${this.width - 75}, ${
      this.height - 10
    }
    ${this.width - 73}, ${this.height - 8} ${this.width - 41}, ${this.height - 8} ${this.width - 38}, ${this.height - 11}
    ${this.width - 24}, ${this.height - 11} ${this.width - 13}, ${this.height - 21} ${this.width - 13}, ${this.height - 24}
    ${this.width - 10}, ${this.height - 27} ${this.width - 10}, 27 ${this.width - 13}, 25 ${this.width - 13}, 21
    ${this.width - 24}, 11 ${this.width - 38}, 11 ${this.width - 41}, 8 ${this.width - 73}, 8 ${this.width - 75}, 10
    ${this.width - 81}, 10 ${this.width - 85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`;
  }

  borderClassName(item: string) {
    return `${item} border`;
  }

  animateValue1() {
    return `${this.mergedColor[0]};${this.mergedColor[1]};${this.mergedColor[0]}`;
  }
  animateValue2() {
    return `${this.mergedColor[1]};${this.mergedColor[0]};${this.mergedColor[1]}`;
  }
  animateValue3() {
    return `${this.mergedColor[0]};${this.mergedColor[1]};transparent`;
  }

  getRectHW() {
    const { width, height } = this.elementRef.nativeElement.getBoundingClientRect();
    this.width = width;
    this.height = height;
    this.updatePoints();
    this.cdr.markForCheck();
  }

  ngAfterViewInit(): void {
    this.getRectHW();
    this.dvResizeObserver
      .observe(this.elementRef)
      .pipe(takeUntil(this.destroy$))
      .subscribe(([entry]) => {
        const { width, height } = entry.target.getBoundingClientRect();
        this.zone.run(() => {
          this.width = width;
          this.height = height;
          this.updatePoints();
          this.cdr.markForCheck();
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
