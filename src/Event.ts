import { IEvent } from './types'
import CampaignParam from './CampaignParam'

export default class Event {
  public event: IEvent
  public campaignParams: object | null

  constructor() {
    this.event = {
      name: 'page_view',
      params: {}
    }
    this.campaignParams = null
  }

  setName(name) {
    this.event.name = name
    return this
  }

  setParams(params: object) {
    Object.assign(this.event.params, params)
    return this
  }

  setCampaignParamsFromUrl(url) {
    const cp = new CampaignParam()
    this.campaignParams = cp.parseFromUrl(url)
    return this
  }

  mergeParams(source, dest, prefix = '') {
    Object.keys(source).forEach((key) => {
      const _key = encodeURIComponent(key)
      dest[`${prefix}${_key}`] = encodeURIComponent(source[key])
    })
  }

  getParams() {
    const payload = {
      en: this.event.name,
      _ee: 1
    }
    this.mergeParams(this.event.params, payload, 'ep.')
    if (this.campaignParams) {
      this.mergeParams(this.campaignParams, payload)
    }
    return payload
  }
}