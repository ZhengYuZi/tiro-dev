import type { App } from 'vue'
import Card from './Card.vue'

Card.install = function (app: App) {
  app.component('TiCard', Card)
}

export const TiCard = Card

export default Card
