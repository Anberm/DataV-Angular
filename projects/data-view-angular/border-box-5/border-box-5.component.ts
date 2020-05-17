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

@Component({
  selector: 'dv-border-box-5',
  exportAs: 'dvBorderBox5',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './border-box-5.component.html',
  styleUrls: ['./border-box-5.component.less'],
  host: {
    '[class.dv-border-box-5]': `true`
  }
})
export class BorderBox5Component implements OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  defaultColor: [string, string] = ['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.20)'];
  mergedColor = Object.assign([], this.defaultColor);
  width = 0;
  height = 0;
  point1 = '';
  point2 = '';
  point3 = '';
  point4 = '';
  point5 = '';
  point6 = '';
  point7 = '';

  @Input() @InputBoolean() dvReverse: boolean = false;

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
    this.point1 = `10, 22 ${this.width - 22}, 22 ${this.width - 22}, ${this.height - 86} ${this.width - 84}, ${this.height - 24} 10, ${
      this.height - 24
    }`;
    this.point2 = `8, 5 ${this.width - 5}, 5 ${this.width - 5}, ${this.height - 100}
    ${this.width - 100}, ${this.height - 5} 8, ${this.height - 5} 8, 5`;
    this.point3 = `3, 5 ${this.width - 20}, 5 ${this.width - 20}, ${this.height - 60}
    ${this.width - 74}, ${this.height - 5} 3, ${this.height - 5} 3, 5`;
    this.point4 = `50, 13 ${this.width - 35}, 13`;
    this.point5 = `15, 20 ${this.width - 35}, 20`;
    this.point6 = `15, ${this.height - 20} ${this.width - 110}, ${this.height - 20}`;
    this.point7 = `15, ${this.height - 13} ${this.width - 110}, ${this.height - 13}`;
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
