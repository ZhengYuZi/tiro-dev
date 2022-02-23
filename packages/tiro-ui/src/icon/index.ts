import type { App } from 'vue'
import Icon from '@tiro/icons'

Icon.install = function (app: App) {
  app.component('TiIcon', Icon)
}

export const IconComponent = Icon

export default Icon
