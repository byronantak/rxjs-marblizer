import { Subscriber } from "rxjs";

export class VisualizeSubscriber<T> extends Subscriber<T> {
    public values: T[] = [];
    public timeLookup: { [date: string]: T[] } = {}
    public startTime = new Date();

    constructor() {
        super();
    }

    public next(value: T): void {
        this.values.push(value);
        const timeDiff = new Date().getTime() - this.startTime.getTime();
        if (this.timeLookup[timeDiff]) {
            this.timeLookup[timeDiff] = [...this.timeLookup[timeDiff], value];
        }
        else {
            this.timeLookup[timeDiff] = [value];
        }

        console.log(JSON.parse(JSON.stringify(this.values)));
        console.log(JSON.parse(JSON.stringify(this.timeLookup)));
        this._next(value);
    }
}