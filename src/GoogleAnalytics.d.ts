import Tracker from './Tracker';
interface IGAParams {
    version: string;
    screenResolution: string;
    clientId: string;
    gtm: string;
}
export default class GoogleAnalytics {
    trackers: Tracker[];
    params: IGAParams;
    log: boolean;
    constructor();
    getInstance(): GoogleAnalytics;
    getClientId(): any;
    getScreenResolution(): string;
    getTracker(measurementId: string): Tracker;
    getDefaultTracker(): Tracker | null;
}
export {};
