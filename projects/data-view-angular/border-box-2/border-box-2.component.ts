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

@Component({
  selector: 'dv-border-box-2',
  exportAs: 'dvBorderBox2',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './border-box-2.component.html',
  styleUrls: ['./border-box-2.component.less'],
  host: {
    '[class.dv-border-box-2]': `true`
  }
})
export class BorderBox2Component implements OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  defaultColor: [string, string] = ['#fff', 'rgba(255, 255, 255, 0.6)'];
  mergedColor = Object.assign([], this.defaultColor);
  width = 0;
  height = 0;
  point1 = '';
  point2 = '';
  point3 = '';

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
    this.point1 = `7, 7 ${this.width - 7}, 7 ${this.width - 7}, ${this.height - 7} 7, ${this.height - 7}`;
    this.point2 = `2, 2 ${this.width - 2} ,2 ${this.width - 2}, ${this.height - 2} 2, ${this.height - 2} 2, 2`;
    this.point3 = `6, 6 ${this.width - 6}, 6 ${this.width - 6}, ${this.height - 6} 6, ${this.height - 6} 6, 6`;
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
