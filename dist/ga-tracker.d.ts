declare module ga {
  export class GoogleAnalytics {
    constructor()
    public getInstance(): GoogleAnalytics
    public getClientId(): string
    public getScreenResolution(): strting
    public getTracker(): Tracker
    public getDefaultTracker(): Tracker | null
  }
  export class Tracker {
    constructor(ga: GoogleAnalytics, measurementId: string)
    public setGTM(gtm: string): Tracker
    public setTrackerServer(trackerServer: string): Tracker
    public send(event: Event): Tracker
  }
  export class Event {
    constructor()
    setName(name: string): Event
    setParams(param: any): Event
    setCampaignParamsFromUrl(url: string): Event
  }
}

export = ga
