import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnDestroy,
  AfterViewInit,
  Input,
  ElementRef,
  NgZone,
  ChangeDetectorRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { InputBoolean } from 'data-view-angular/core/util';
import { DvResizeObserver } from 'data-view-angular/core/resize-observers';
import { takeUntil } from 'rxjs/operators';
import { InputNumber } from 'data-view-angular/core/util';

@Component({
  selector: 'dv-border-box-8',
  exportAs: 'dvBorderBox8',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './border-box-8.component.html',
  styleUrls: ['./border-box-8.component.less'],
  host: {
    '[class.dv-border-box-8]': `true`
  }
})
export class BorderBox8Component implements OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  defaultColor: [string, string] = ['#235fa7', '#4fd2dd'];
  mergedColor = Object.assign([], this.defaultColor);
  width = 0;
  height = 0;
  point1 = '';

  timestamp = Date.now();
  path = `border-box-8-path-${this.timestamp}`;
  gradient = `border-box-8-gradient-${this.timestamp}`;
  mask = `border-box-8-mask-${this.timestamp}`;
  fill1 = `url(#${this.gradient})`;
  hrefTpl = `#${this.path}`;
  maskTpl = `url(#${this.mask})`;

  getLength() {
    return (this.width + this.height - 5) * 2;
  }
  fromTpl = `0, ${this.getLength()}`;
  toTpl = `${this.getLength()}, 0`;

  @Input() @InputBoolean() dvReverse: boolean = false;

  @Input() @InputNumber() dvDur: number = 3;

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

  pathD() {
    if (this.dvReverse)
      return `M 2.5, 2.5 L 2.5, ${this.height - 2.5} L ${this.width - 2.5}, ${this.height - 2.5} L ${this.width - 2.5}, 2.5 L 2.5, 2.5`;

    return `M2.5, 2.5 L${this.width - 2.5}, 2.5 L${this.width - 2.5}, ${this.height - 2.5} L2.5, ${this.height - 2.5} L2.5, 2.5`;
  }

  updatePoints() {
    this.point1 = `5, 5 ${this.width - 5}, 5 ${this.width - 5} ${this.height - 5} 5, ${this.height - 5}`;
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
