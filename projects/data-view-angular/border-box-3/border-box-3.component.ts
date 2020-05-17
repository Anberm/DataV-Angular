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
  selector: 'dv-border-box-3',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './border-box-3.component.html',
  styleUrls: ['./border-box-3.component.less'],
  host: {
    '[class.dv-border-box-3]': `true`
  }
})
export class BorderBox3Component implements OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();
  defaultColor: [string, string] = ['#fff', 'rgba(255, 255, 255, 0.6)'];
  mergedColor = Object.assign([], this.defaultColor);
  width = 0;
  height = 0;
  point1 = '';
  point2 = '';
  point3 = '';
  point4 = '';
  point5 = '';

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
    this.point1 = `23, 23 ${this.width - 24}, 23 ${this.width - 24}, ${this.height - 24} 23, ${this.height - 24}`;
    this.point2 = `4, 4 ${this.width - 22} ,4 ${this.width - 22}, ${this.height - 22} 4, ${this.height - 22} 4, 4`;
    this.point3 = `10, 10 ${this.width - 16}, 10 ${this.width - 16}, ${this.height - 16} 10, ${this.height - 16} 10, 10`;
    this.point4 = `16, 16 ${this.width - 10}, 16 ${this.width - 10}, ${this.height - 10} 16, ${this.height - 10} 16, 16`;
    this.point5 = `22, 22 ${this.width - 4}, 22 ${this.width - 4}, ${this.height - 4} 22, ${this.height - 4} 22, 22`;
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
