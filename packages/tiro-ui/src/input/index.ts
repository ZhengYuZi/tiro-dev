import type { App } from 'vue'
import Input from './Input.vue'

Input.install = function (app: App) {
  app.component('ti-input', Input)
}

export const InputComponent = Input

export default Input
