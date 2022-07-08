import Tracker from './Tracker'
import Storage from './utils/storage'
import { CLIENT_ID } from './utils/constant'
import { getSystemInfo, uuid } from './utils'

interface IGAParams {
  version: number
  screenResolution: string
  clientId: string
  gtm: string
}

let _instance: GoogleAnalytics | null = null

export default class GoogleAnalytics {
  public trackers: Tracker[]
  public params: IGAParams
  public log: boolean

  constructor() {
    this.params = {
      version: 2,
      gtm: 'GTM-MD3RB97',
      clientId: this.getClientId(),
      screenResolution: this.getScreenResolution()
    }
    this.trackers = []
    this.log = true

    if (_instance) {
      return _instance
    }
    _instance = this
  }

  getInstance() {
    return new GoogleAnalytics()
  }

  getClientId() {
    let clientId = Storage.getItem(CLIENT_ID)
    if (!clientId) {
      clientId = uuid()
      Storage.setItem(CLIENT_ID, clientId)
    }
    return clientId
  }

  getScreenResolution() {
    const systemInfo = getSystemInfo()
    const w = systemInfo.windowWidth
    const h = systemInfo.windowHeight
    return `${w}x${h}`
  }

  getTracker(measurementId: string): Tracker {
    const tracker = new Tracker(this, measurementId)
    this.trackers.push(tracker)
    return tracker
  }

  getDefaultTracker(): Tracker | null {
    if (this.trackers.length > 0) {
      return this.trackers[0]
    }
    return null
  }
}
