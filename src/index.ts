import PageViewBuilder from './PageViewBuilder'
import GoogleAnalytics from './GoogleAnalytics'

const ga = new GoogleAnalytics()
const tracker = ga.getTracker('G-ZBSJVZV355')

const pb = new PageViewBuilder()
pb.setParams({ location: 'area', test: 'true' })
const params = pb.build()
tracker.send(params)
