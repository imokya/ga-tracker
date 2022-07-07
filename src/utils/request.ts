import { Mode } from './constant'
import config from '../config'

declare const uni

export const request = (url, payload) => {
  if (config.mode === Mode.web) {
    return webRequest(url, payload)
  } else if (config.mode === Mode.uniapp) {
    return uniRequest(url, payload)
  }
}

const uniRequest = (url, payload) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      data: payload,
      method: 'POST',
      success: (res) => {
        console.log('success')
        resolve('success')
      },
      fail: (res) => {
        reject(res)
      }
    })
  })
}

const webRequest = (url, payload) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: payload
    })
      .then((reponse) => {
        resolve('success')
      })
      .catch((err) => {
        reject(err)
      })
  })
}
