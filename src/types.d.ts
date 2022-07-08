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
