import ScreenViewBuilder from './ScreenViewBuilder'
import GoogleAnalytics from './GoogleAnalytics'

const ga = new GoogleAnalytics()
const tracker = ga.getTracker('G-ZBSJVZV355')

const eb = new ScreenViewBuilder()
eb.setParams({ location: 'area', test: 'true' })
const params = eb.build()
tracker.send(params)
