import type { App } from 'vue'
import TiIcons from './lib/index.vue'

const TiroIcons:any = {}

TiroIcons.install = function (app: App) {
    app.component('ti-icon', TiIcons)
}

export default TiroIcons