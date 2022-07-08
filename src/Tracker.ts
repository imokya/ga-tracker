const defaultTrackerServer = 'https://www.google-analytics.com'
import GoogleAnalytics from './GoogleAnalytics'
import { IPayLoadParams } from './types'
import { buildQueryFromObject, log, getSystemInfo } from './utils'
import { request } from './utils/request'
import Event from './Event'

interface IQueueData {
  payload: object
  time: Number
}

export default class Tracker {
  public trackerServer: string
  public ga: GoogleAnalytics
  public measurementId: string
  public queue: IQueueData[]
  public sending: boolean

  constructor(ga: GoogleAnalytics, measurementId: string) {
    this.ga = ga
    this.measurementId = measurementId
    this.trackerServer = defaultTrackerServer
    this.queue = []
    this.sending = false
  }

  setTrackerServer(trackerServer: string) {
    this.trackerServer = trackerServer
    return this
  }

  send(event: Event) {
    const payload = event.getParams()
    this.addToQueue(payload)
    return this
  }

  addToQueue(payload: object) {
    this.queue.push({
      payload,
      time: +new Date()
    })
    this.processQueue()
  }

  processQueue() {
    if (this.sending) {
      return
    }
    this.sending = true

    const payloads: string[] = []
    while (this.queue.length > 0) {
      const current = this.queue[0]
      const payloadData = current.payload as any
      const payloadTime = current.time as number
      payloadData._et = +new Date() - payloadTime

      // 将payload转为querystring
      const payload = buildQueryFromObject(payloadData)

      const prevSize = payloads
        .map((playload) => payload.length)
        .reduce((a, b) => a + b, 0)

      const curSize = payload.length
      const totalSize = curSize + prevSize

      // payload大小超过限制处理
      if (
        totalSize > 16 * 1204 ||
        curSize > 8 * 1024 ||
        payloads.length >= 20
      ) {
        if (payloads.length > 0) {
          break
        }
      }
      payloads.push(payload)

      this.queue.shift()
    }

    const payloadData = payloads.join('\r\n')
    this.sendRequest(payloadData)
  }

  async sendRequest(payloadData: any) {
    const ga = this.ga
    const systemInfo = getSystemInfo()
    const params: IPayLoadParams = {
      v: ga.params.version,
      cid: ga.params.clientId,
      tid: this.measurementId,
      gtm: ga.params.gtm,
      sr: ga.params.screenResolution,
      sid: +new Date(),
      ul: systemInfo.language,
      _p: Math.round(2147483647 * Math.random()).toString(),
      _s: 1,
      seg: 1,
      sct: 1
    }
    const apiURL = `${this.trackerServer}/g/collect`
    const query = buildQueryFromObject(params)
    const url = `${apiURL}?${query}`
    try {
      const res = await request(url, payloadData)
      this.sending = false
      log('ga:success', res)
    } catch (err) {
      this.sending = false
      log('ga:failed', err)
    }
  }
}
