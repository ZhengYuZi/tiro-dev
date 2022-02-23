import type { App } from 'vue'
import Select from './src/select/Select.vue'
import Input from './src/input/Input.vue'
import Card from './src/card/Card.vue'
import Button from './src/button/Button.vue'
import Image from './src/image/Image.vue'
import Icon from '@tiro/icons/lib/index.vue'

const components = [
  {
    name: 'ti-icon',
    component: Icon
  },
  {
    name: 'ti-select',
    component: Select
  },
  {
    name: 'ti-input',
    component: Input
  },
  {
    name: 'ti-card',
    component: Card
  },
  {
    name: 'ti-button',
    component: Button
  },
  {
    name: 'ti-image',
    component: Image
  }
]

export default {
  install: (app: App) => {
    components.map((ti) => {
      app.component(ti.name, ti.component)
    })
  }
}
