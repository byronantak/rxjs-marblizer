export interface DataIngester<T> {
    ingest(data: T): void;
    complete(): void;
}