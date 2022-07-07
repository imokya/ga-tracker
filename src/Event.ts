import { IEvent, IParams } from './types'
import CampaignParam from './CampaignParam'

const keyMap: IParams = {
  page_title: 'dt',
  page_location: 'dl'
}

export default class Event {
  public event: IEvent
  public campaignParams: IParams | null

  constructor() {
    this.event = {
      name: 'page_view',
      params: {}
    }
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

  getParams() {
    const payload: IParams = {
      en: this.event.name,
      _ee: 1
    }
    // 如果存在keyMap中的键值
    Object.keys(this.event.params).forEach((key) => {
      if (keyMap[key]) {
        payload[keyMap[key]] = this.event.params[key]
        delete this.event.params[key]
      }
    })
    this.mergeParams(this.event.params, payload, 'ep.')
    if (this.campaignParams) {
      this.mergeParams(this.campaignParams, payload)
    }
    return payload
  }
}
