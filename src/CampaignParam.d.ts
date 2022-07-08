import { IParams } from './types';
export default class CampaignParam {
    parseFromUrl(url: string): {
        ci: string;
        cm: string;
    } & IParams;
}
