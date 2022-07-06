import { IEvent } from './types'

export default class EventBuilder {
  public event: IEvent

  constructor() {
    this.event = {
      name: 'page_view',
      params: {}
    }
  }

  setName(name) {
    this.event.name = name
    return this
  }

  setParams(params: object) {
    Object.assign(this.event.params, params)
    return this
  }

  build() {
    const payload = {
      en: this.event.name,
      _ee: 1
    }
    Object.keys(this.event.params).forEach((key) => {
      const _key = encodeURIComponent(key)
      payload[`ep.${_key}`] = encodeURIComponent(this.event.params[key])
    })
    return payload
  }
}
