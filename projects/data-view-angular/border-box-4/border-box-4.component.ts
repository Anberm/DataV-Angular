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
import { DvResizeObserver } from 'data-view-angular/core/resize-observers';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'data-view-angular/core/util';

@Component({
  selector: 'dv-border-box-4',
  exportAs: 'dvBorderBox4',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './border-box-4.component.html',
  styleUrls: ['./border-box-4.component.less'],
  host: {
    '[class.dv-border-box-4]': `true`
  }
})
export class BorderBox4Component implements OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  defaultColor: [string, string] = ['red', 'rgba(0,0,255,0.8)'];
  mergedColor = Object.assign([], this.defaultColor);
  width = 0;
  height = 0;
  point1 = '';
  point2 = '';
  point3 = '';
  point4 = '';
  point5 = '';
  point6 = '';

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
    this.point1 = `${this.width - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
      16, 42 16, ${this.height - 32} 41, ${this.height - 7} ${this.width - 15}, ${this.height - 7}
    `;
    this.point2 = `145, ${this.height - 5} 40, ${this.height - 5} 10, ${this.height - 35}
    10, 40 40, 5 150, 5 170, 20 ${this.width - 15}, 20`;
    this.point3 = `245, ${this.height - 1} 36, ${this.height - 1} 14, ${this.height - 23}
    14, ${this.height - 100}`;
    this.point4 = `7, ${this.height - 40} 7, ${this.height - 75}`;
    this.point5 = `200, 17 ${this.width - 10}, 17`;
    this.point6 = `385, 17 ${this.width - 10}, 17`;
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
