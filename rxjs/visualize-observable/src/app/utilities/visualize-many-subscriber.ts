import { Subscriber } from "rxjs";

export class VisualizeManySubscriber<T> extends Subscriber<T[]> {
    public values: T[] = [];
    public timeLookup: { [date: string]: T[] } = {}
    public startTime = new Date();

    private timeIntervalCounter = 0;
    private expectedItemCount: number;

    constructor(expectedItemCount = 2) {
        super();
        this.expectedItemCount = expectedItemCount;
    }

    public next(values: T[]): void {
        const expectedValues = values.filter((_, i) => {
            return i < this.expectedItemCount;
        })
        this.values = [...this.values, ...expectedValues];
        const timeDiff = this.timeIntervalCounter++;
        if (this.timeLookup[timeDiff]) {
            this.timeLookup[timeDiff] = [...this.timeLookup[timeDiff], ...expectedValues];
        }
        else {
            this.timeLookup[timeDiff] = [...expectedValues];
        }

        console.log(JSON.parse(JSON.stringify(this.values)));
        console.log(JSON.parse(JSON.stringify(this.timeLookup)));
        this._next(values);
    }
}