import { DataIngester } from './../interfaces/data-ingester.interface';

export class DataCollecter<T> implements DataIngester<T> {
    public values: T[] = [];
    public timeLookup: { [date: string]: T[] } = {}
    public startTime = new Date();
    public isComplete = false;

    public ingest(value: T): void {
        this.values.push(value);
        const timeDiff = new Date().getTime() - this.startTime.getTime();
        if (this.timeLookup[timeDiff]) {
            this.timeLookup[timeDiff] = [...this.timeLookup[timeDiff], value];
        }
        else {
            this.timeLookup[timeDiff] = [value];
        }
    }

    public complete(): void {
        this.isComplete = true;
    }
}

export class DataMultiCollecter<T> implements DataIngester<T[]> {
    public values: T[] = [];
    public timeLookup: { [date: string]: T[] } = {}
    public startTime = new Date();
    public isComplete = false;

    private timeIntervalCounter = 0;
    private expectedItemCount: number;

    constructor(expectedItemCount = 2) {
        this.expectedItemCount = expectedItemCount;
    }

    public ingest(values: T[]): void {
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
    }

    public complete(): void {
        this.isComplete = true;
    }
}