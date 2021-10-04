import { Subscriber } from "rxjs";
import { DataMultiCollecter } from './data-collector';

export class VisualizeManySubscriber<T> extends Subscriber<T[]> {
    public dataCollector: DataMultiCollecter<T>;

    constructor(expectedItemCount = 2) {
        super();
        this.dataCollector = new DataMultiCollecter<T>(expectedItemCount);
    }

    public next(values: T[]): void {
        this.dataCollector.ingest(values);
        this._next(values);
    }
}