import GoogleAnalytics from '../GoogleAnalytics'
import config from '../config'
import { Mode } from './constant'
import { ISystemInfo } from '../types'

declare const uni

export const buildQueryFromObject = (obj) => {
  const query: string[] = []
  Object.keys(obj).forEach((key) => {
    const k = encodeURIComponent(key)
    const v = encodeURIComponent(obj[key])
    query.push(`${k}=${v}`)
  })
  return query.join('&')
}

export const log = (...msg) => {
  const ga = new GoogleAnalytics()
  if (ga.log) {
    console.log(msg)
  }
}

export const uuid = () => {
  let d = +new Date()
  const uuid = 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      let r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
    }
  )
  return uuid
}

export const getSystemInfo = (): ISystemInfo => {
  const defaultInfo: ISystemInfo = {
    windowWidth: 0,
    windowHeight: 0,
    pixelRatio: 1,
    language: 'zh_CN'
  }
  let info = {}
  if (config.mode === Mode.web) {
    info = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio,
      language: navigator.language
    }
  } else if (config.mode === Mode.uniapp) {
    info = uni.getSystemInfoSync()
  }
  return Object.assign({}, defaultInfo, info)
}
