class Storage {
  setItem(key: string, value: any) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }

  getItem(key: string) {
    const value = localStorage.getItem(key)
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
