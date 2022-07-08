export default class CampaignParam {
    parseFromUrl(url: string): {
        ci: string;
        cm: string;
    } & IParams;
}

export default class Event {
    event: IEvent;
    campaignParams: IParams | null;
    filterMap: IParams | null;
    constructor();
    setName(name: string): this;
    setParams(params: object): this;
    setCampaignParamsFromUrl(url: string): this;
    mergeParams(source: IParams, dest: IParams, prefix?: string): void;
    filterParams(payload: any): void;
    getParams(): IParams;
}

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

export default class PageViewEvent extends Event {
    constructor();
}

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

export declare const _default: {
    mode: Mode;
};
export default _default;

export declare const _default: {
    Event: typeof Event;
    PageViewEvent: typeof PageViewEvent;
    GoogleAnalytics: typeof GoogleAnalytics;
};
export default _default;

export interface IPayLoadParams {
    v: string;
    gtm: string;
    tid: string;
    cid: string;
    sr: string;
    sid: Number;
    dl?: string;
    dt?: string;
    ul?: string;
    dr?: string;
    _p?: string;
    _s?: string;
    sct?: string;
    seg?: string;
    _z?: string;
}
export interface IParams {
    [k: string]: any;
}
export interface IEvent {
    name: string;
    params: IParams;
}
export interface ISystemInfo {
    windowWidth: number;
    windowHeight: number;
    pixelRatio: number;
    language: string;
}

export declare const CLIENT_ID: string;
export declare enum Mode {
    uniapp = "uniapp",
    wechat = "wechat",
    tara = "taro",
    web = "web"
}

export declare const buildQueryFromObject: (obj: any) => string;
export declare const log: (...msg: any[]) => void;
export declare const uuid: () => string;
export declare const getSystemInfo: () => ISystemInfo;

export declare const request: (url: string, payload: string) => Promise<unknown> | undefined;

export declare class Storage {
    setItem(key: string, value: any): void;
    getItem(key: string): any;
}
export declare const _default: Storage;
export default _default;
