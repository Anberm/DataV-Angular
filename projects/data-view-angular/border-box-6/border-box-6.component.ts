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
  selector: 'dv-border-box-6',
  exportAs: 'dvBorderBox6',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './border-box-6.component.html',
  styleUrls: ['./border-box-6.component.less'],
  host: {
    '[class.dv-border-box-6]': `true`
  }
})
export class BorderBox6Component implements OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  defaultColor: [string, string] = ['rgba(255, 255, 255, 0.35)', 'gray'];
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
  point8 = '';
  point9 = '';
  point10 = '';
  point11 = '';

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
    this.point1 = `9, 7 ${this.width - 9}, 7 ${this.width - 9}, ${this.height - 7} 9, ${this.height - 7}`;
    this.point2 = `10, 4 ${this.width - 10}, 4`;
    this.point3 = `10, ${this.height - 4} ${this.width - 10}, ${this.height - 4}`;
    this.point4 = `5, 70 5, ${this.height - 70}`;
    this.point5 = `${this.width - 5}, 70 ${this.width - 5}, ${this.height - 70}`;
    this.point6 = `${this.width - 3}, 10 ${this.width - 3}, 50`;
    this.point7 = `${this.width - 7}, 30 ${this.width - 7}, 80`;
    this.point8 = `3, ${this.height - 10} 3, ${this.height - 50}`;
    this.point9 = `7, ${this.height - 30} 7, ${this.height - 80}`;
    this.point10 = `${this.width - 3}, ${this.height - 10} ${this.width - 3}, ${this.height - 50}`;
    this.point11 = `${this.width - 7}, ${this.height - 30} ${this.width - 7}, ${this.height - 80}`;
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
