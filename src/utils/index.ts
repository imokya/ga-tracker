import GoogleAnalytics from '../GoogleAnalytics'

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
