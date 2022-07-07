import config from '../config'
import { Mode } from './constant'

declare const uni

class Storage {
  setItem(key: string, value: any) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    if (config.mode === Mode.web) {
      localStorage.setItem(key, value)
    } else if (config.mode === Mode.uniapp) {
      uni.setStorageSync(key, value)
    }
  }

  getItem(key: string) {
    let value
    if (config.mode === Mode.web) {
      value = localStorage.getItem(key)
    } else if (config.mode === Mode.uniapp) {
      value = uni.getStorageSync(key)
    }
    if (value) {
      try {
        return JSON.parse(value)
      } catch (err) {
        return value
      }
    }
    return null
  }
}

export default new Storage()
