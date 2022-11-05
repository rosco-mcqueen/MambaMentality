import { Model } from '@vuex-orm/core'

export default class Training extends Model {
  static entity = 'trainings'

  static fields () {
    return {
      id: this.attr(null),
      fourAm: this.boolean(false),
      shots: this.string(''),
      date: this.number(1),
      uuid: this.string('')
    }
  }
}
