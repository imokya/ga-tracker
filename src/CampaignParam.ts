const paramsMap = {
  utm_id: 'ci',
  utm_source: 'cs',
  utm_medium: 'cm',
  utm_campaign: 'cn',
  utm_term: 'ck',
  utm_content: 'cc',
  gclid: 'gclid'
}

const defaultParams = {
  ci: 'gaTracker',
  cm: 'gaTracker'
}

export default class CampaignParam {
  parseFromUrl(url) {
    const params = {}
    url.split('&').forEach((item) => {
      const [key, val] = item.split('=')
      const newKey = paramsMap[key]
      const newVal = encodeURIComponent(val)
      params[newKey] = newVal
    })
    return Object.assign({}, defaultParams, params)
  }
}
