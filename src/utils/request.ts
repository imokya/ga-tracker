import { Mode } from './constant'
import config from '../config'

declare const uni: any

export const request = (url: string, payload: string) => {
  if (config.mode === Mode.web) {
    return webRequest(url, payload)
  } else if (config.mode === Mode.uniapp) {
    return uniRequest(url, payload)
  }
}

const uniRequest = (url: string, payload: string) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      data: payload,
      method: 'POST',
      success: (res: any) => {
        console.log('success')
        resolve('success')
      },
      fail: (res: any) => {
        reject(res)
      }
    })
  })
}

const webRequest = (url: string, payload: string) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: payload
    })
      .then((res: any) => {
        resolve('success')
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}
