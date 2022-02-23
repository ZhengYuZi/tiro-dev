import type { App } from 'vue'
import Select from './Select.vue'

Select.install = function (app: App) {
  app.component('TiSelect', Select)
}

export const SelectComponent = Select

export default Select
