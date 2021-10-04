import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VisualizeSubscriber } from 'src/app/utilities/visualize-subscriber';

@Component({
  templateUrl: './of-demo.component.html',
})
export class OfDemoComponent {
  public observable: Observable<number[]>;
  public visualizer: VisualizeSubscriber<number[]>;

  constructor() {
    this.observable = of([1, 3, 5, 7]);
    this.visualizer = new VisualizeSubscriber();
    this.observable.subscribe(this.visualizer);
  }
}
