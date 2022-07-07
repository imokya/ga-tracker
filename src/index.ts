import Event from './Event'
import GoogleAnalytics from './GoogleAnalytics'

const campaignUrl =
  'utm_id=valtech&utm_source=wechat&utm_medium=cbmm&utm_campaign=meeting&utm_term=click&utm_content=save'

const ga = new GoogleAnalytics()
const tracker = ga.getTracker('G-ZBSJVZV355')

const event = new Event()
event.setName('cbmm view')
event.setParams({ title: 'cbmm title', description: 'cbmm description' })
event.setCampaignParamsFromUrl(campaignUrl)

tracker.send(event)
