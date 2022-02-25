import type { App } from 'vue'
import Button from './Button.vue'

Button.install = function (app: App) {
  app.component('TiButton', Button)
}

export const TiButton = Button

export default Button
