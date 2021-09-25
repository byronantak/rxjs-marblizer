import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MarbleComponent {
  @Input()
  public set value(v: string) {
    this._value = v;
    this.width = this.determineSize(this._value) + 'ch';
  };
  public get value(): string {
    return this._value;
  }
  @Input()
  public borderColour = '#00f';
  @Input()
  public circleColour = '#bada55';
  public width = '1ch';

  private _value = '';

  private determineSize(v: string): number {
    return this.clamp(v.length, Number.MAX_VALUE, 2);
  }

  private clamp(value: number, max: number, min: number): number {
    return Math.max(min, Math.min(value, max));
  }
}
