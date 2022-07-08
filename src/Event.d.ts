import { IEvent, IParams } from './types';
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
