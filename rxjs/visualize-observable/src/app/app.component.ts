import { Component } from '@angular/core';
import { combineLatest, from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DataCollecter } from './utilities/data-collector';
import { VisualizeManySubscriber } from './utilities/visualize-many-subscriber';
import { visualizeOperator } from './utilities/visualize-operator';
import { VisualizeSubscriber } from './utilities/visualize-subscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'visualize-observable';

  public readonly obs: Observable<number>;
  public readonly visualizer: VisualizeSubscriber<number>;
  public readonly obs2: Observable<number>;
  public readonly visualizer2: VisualizeSubscriber<number>;
  public readonly visualizer3: VisualizeManySubscriber<any>;
  public readonly visualizer4: VisualizeManySubscriber<any>;

  public readonly beforeFilterDataCollector = new DataCollecter<number>();
  public readonly afterFilterDataCollector = new DataCollecter<number>();

  constructor() {
    this.visualizer = new VisualizeSubscriber();
    this.visualizer2 = new VisualizeSubscriber();
    this.visualizer3 = new VisualizeManySubscriber(2);
    this.visualizer4 = new VisualizeManySubscriber(3);
    this.obs = from([1, 2, 3, 4, 5]);
    this.obs.subscribe(this.visualizer);
    this.obs2 = from([10, 20, 30, 40, 50]);
    this.obs2.subscribe(this.visualizer2);

    combineLatest([this.obs, this.obs2]).subscribe(this.visualizer3);

    combineLatest([this.obs, this.obs2, this.obs]).subscribe(this.visualizer4);

    this.obs.pipe(visualizeOperator(this.beforeFilterDataCollector), filter(x => x % 2 === 0), visualizeOperator(this.afterFilterDataCollector)).subscribe();
  }
}
