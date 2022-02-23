import type { App } from 'vue'
import Icon from './lib/index.vue'

Icon.install = function (app: App) {
  app.component('TiIcon', Icon)
}

export default Icon
