import { MonoTypeOperatorFunction, Observable, Subscriber } from "rxjs";
import { DataIngester } from './../interfaces/data-ingester.interface';
import { operate, OperatorSubscriber } from "./rxjs-internals";

export function visualizeOperator<T>(dataCollector: DataIngester<T>): MonoTypeOperatorFunction<T> {

    return operate((source: Observable<T>, subscriber: Subscriber<T>) => {

        // Subscribe to the source, all errors and completions are
        // forwarded to the consumer.
        source.subscribe(
            // Call the predicate with the appropriate `this` context,
            // if the predicate returns `true`, then send the value
            // to the consumer.
            new OperatorSubscriber<T>(subscriber, (value: T) => {
                dataCollector.ingest(value);
                subscriber.next(value);
            })
        );
    });
}