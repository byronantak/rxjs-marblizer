import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { VisualizeSubscriber } from 'src/app/utilities/visualize-subscriber';

@Component({
  templateUrl: './from-demo.component.html',
})
export class FromDemoComponent {
  public observable: Observable<number>;
  public visualizer: VisualizeSubscriber<number>;

  constructor() {
    this.observable = from([1, 3, 5, 7]);
    this.visualizer = new VisualizeSubscriber();
    this.observable.subscribe(this.visualizer);
  }
}
