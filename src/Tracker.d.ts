import GoogleAnalytics from './GoogleAnalytics';
import Event from './Event';
interface IQueueData {
    payload: object;
    time: Number;
}
export default class Tracker {
    trackerServer: string;
    ga: GoogleAnalytics;
    measurementId: string;
    queue: IQueueData[];
    sending: boolean;
    constructor(ga: GoogleAnalytics, measurementId: string);
    setTrackerServer(trackerServer: string): this;
    send(event: Event): this;
    addToQueue(payload: object): void;
    processQueue(): void;
    sendRequest(payloadData: any): Promise<void>;
}
export {};
