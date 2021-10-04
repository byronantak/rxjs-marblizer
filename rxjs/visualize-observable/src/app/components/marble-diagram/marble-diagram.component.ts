import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MarbleDiagramTimer } from 'src/app/interfaces/marble-diagram-timer.interface';

@Component({
  selector: 'app-marble-diagram',
  templateUrl: './marble-diagram.component.html',
  styleUrls: ['./marble-diagram.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MarbleDiagramComponent {
  @Input()
  public set visualizer(value: MarbleDiagramTimer<any>) {
    this._value = value;
    this.timeDiffs = [];
    Object.keys(value).forEach(key => {
      const numberKey = Number(key);
      if (numberKey != null && !isNaN(numberKey)) {
        this.timeDiffs.push(numberKey);
        this.values.push(value[numberKey]);
        this.colours.push(this.randomizeColour());
      }
    });
  };

  @Input()
  public isComplete = false;

  public timeDiffs: number[] = [];
  public values: any[] = [];
  public colours: string[] = []

  private _value: MarbleDiagramTimer<any> = {};

  public getDisplayValue(values: any[]): string {
    return values.join(', ');
  }

  private randomizeColour(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
