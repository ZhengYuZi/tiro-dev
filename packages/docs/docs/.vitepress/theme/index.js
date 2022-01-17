import DefaultTheme from 'vitepress/theme'
import Layout from '../components/Layout.vue'
import './style/custom.css'
import './style/mweb-lark.css'
import ti from '@tiro/ui'
import Example from '../components/example.vue'
const NotFound = DefaultTheme.NotFound

export default {
  NotFound,
  Layout,
  enhanceApp({ app }) {
    app.use(ti)
    app.component('ti-example', Example)
  }
}
