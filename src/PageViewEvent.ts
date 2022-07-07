import Event from './Event'

export default class PageViewEvent extends Event {
  constructor() {
    super()
    this.filterMap = {
      page_title: 'dt',
      page_location: 'dl'
    }
    this.event.name = 'page_view'
  }
}
