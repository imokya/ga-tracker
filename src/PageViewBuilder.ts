import EventBuilder from './EventBuilder'

export default class ScreenViewBuilder extends EventBuilder {
  constructor() {
    super()
    this.event.name = 'page_view'
  }
}
