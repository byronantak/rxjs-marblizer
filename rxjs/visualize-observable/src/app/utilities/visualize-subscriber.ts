import { Subscriber } from "rxjs";
import { DataCollecter } from './data-collector';

export class VisualizeSubscriber<T> extends Subscriber<T> {
    public dataCollector: DataCollecter<T>;

    constructor() {
        super();
        this.dataCollector = new DataCollecter();
    }

    public next(value: T): void {
        this.dataCollector.ingest(value);
        this._next(value);
    }
}