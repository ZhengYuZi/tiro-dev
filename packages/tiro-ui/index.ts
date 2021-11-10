import type { App } from 'vue'
import Select from './src/select/Select.vue'
import Input from './src/input/Input.vue'
import Card from './src/card/Card.vue'
import Button from './src/button/Button.vue'

const TiroUi:any = {}

const components = [
    {
        name: 'ti-select',
        component: Select
    },{
        name: 'ti-input',
        component: Input
    },{
        name: 'ti-card',
        component: Card
    },{
        name: 'ti-button',
        component: Button
    }
]

TiroUi.install = function (app: App) {
    components.forEach(ti=>{
        app.component(ti.name, ti.component)
    })
}

export default TiroUi