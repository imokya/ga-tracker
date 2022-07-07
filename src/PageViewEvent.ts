import Event from './Event'

export default class PageViewEvent extends Event {
  constructor() {
    super()
    this.event.name = 'page_view'
  }
}
