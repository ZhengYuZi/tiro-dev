import type { App } from "vue"
import Card from "./Card.vue"

Card.install = function (app: App) {
  app.component('ti-card', Card)
}

export const CardComponent = Card

export default Card