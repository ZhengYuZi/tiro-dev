import type { App } from "vue"
import Button from "./Button.vue"

Button.install = function (app: App) {
  app.component('ti-button', Button)
}

export const ButtonComponent = Button

export default Button