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
import { InputBoolean } from 'data-view-angular';
import { DvResizeObserver } from 'data-view-angular/core/resize-observers';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dv-border-box-7',
  exportAs: 'dvBorderBox7',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './border-box-7.component.html',
  styleUrls: ['./border-box-7.component.less'],
  host: {
    '[class.dv-border-box-7]': `true`,
    '[style.box-shadow]': 'inset 0 0 40px mergedColor[0]',
    '[style.border]': '1px solid mergedColor[0]',
    '[style.background-color]': 'dvBackgroundColor'
  }
})
export class BorderBox7Component implements OnDestroy, AfterViewInit {
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
    this.point1 = `${this.width - 25}, 0 ${this.width}, 0 ${this.width}, 25`;
    this.point2 = `${this.width - 25}, ${this.height} ${this.width}, ${this.height} ${this.width}, ${this.height - 25}`;
    this.point3 = `0, ${this.height - 25} 0, ${this.height} 25, ${this.height}`;
    this.point4 = `${this.width - 10}, 0 ${this.width}, 0 ${this.width}, 10`;
    this.point5 = `${this.width - 10}, ${this.height} ${this.width}, ${this.height} ${this.width}, ${this.height - 10}`;
    this.point6 = `0, ${this.height - 10} 0, ${this.height} 10, ${this.height}`;
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
