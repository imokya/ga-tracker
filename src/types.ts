export interface IPayLoadParams {
  v: number // version
  gtm: string // tag manager container
  tid: string // measurement id
  cid: string // client id
  sr: string // screen resolution
  sid: Number // session id
  dl?: string // document location
  dt?: string // document title
  ul?: string // language
  dr?: string
  _p?: string
  _s?: number
  sct?: number
  seg?: number
  _z?: string
}

export interface IParams {
  [k: string]: any
}

export interface IEvent {
  name: string
  params: IParams
}

export interface ISystemInfo {
  windowWidth: number
  windowHeight: number
  pixelRatio: number
  language: string
}
