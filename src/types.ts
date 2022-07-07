export interface IPayLoadParams {
  v: string // version
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
  _s?: string
  sct?: string
  seg?: string
  _z?: string
}

export interface IParams {
  [k: string]: string | number
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
