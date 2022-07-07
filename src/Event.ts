import { IEvent, IParams } from './types'
import CampaignParam from './CampaignParam'

export default class Event {
  public event: IEvent
  public campaignParams: IParams | null
  public filterMap: IParams | null

  constructor() {
    this.event = {
      name: 'page_view',
      params: {}
    }
    this.filterMap = null
    this.campaignParams = null
  }

  setName(name: string) {
    this.event.name = name
    return this
  }

  setParams(params: object) {
    Object.assign(this.event.params, params)
    return this
  }

  setCampaignParamsFromUrl(url: string) {
    const cp = new CampaignParam()
    this.campaignParams = cp.parseFromUrl(url)
    return this
  }

  mergeParams(source: IParams, dest: IParams, prefix: string = '') {
    Object.keys(source).forEach((key) => {
      const _key = encodeURIComponent(key)
      dest[`${prefix}${_key}`] = source[key]
    })
  }

  // 根据filterMap替换特殊键值
  filterParams(payload: any) {
    if (!this.filterMap) return
    Object.keys(this.event.params).forEach((key) => {
      if (this.filterMap && this.filterMap[key]) {
        payload[this.filterMap[key]] = this.event.params[key]
        delete this.event.params[key]
      }
    })
  }

  getParams() {
    const payload: IParams = {
      en: this.event.name,
      _ee: 1
    }

    this.filterParams(payload)

    this.mergeParams(this.event.params, payload, 'ep.')
    if (this.campaignParams) {
      this.mergeParams(this.campaignParams, payload)
    }
    return payload
  }
}
