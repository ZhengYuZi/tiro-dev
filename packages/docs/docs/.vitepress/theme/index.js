import DefaultTheme from 'vitepress/theme'
import Layout from '../../theme-comps/Layout.vue'
import './custom.css'
import './mweb-lark.css'
import ti from '@tiro/ui'
import Example from '../../theme-comps/example.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ti)
    app.component('ti-example', Example)
  }
}
