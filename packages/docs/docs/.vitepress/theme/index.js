import DefaultTheme from 'vitepress/theme'
import Layout from '../components/Layout.vue'
import './style/custom.css'
import './style/mweb-lark.css'
import ti from '@tiro/ui'
import Example from '../components/example.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    app.use(ti)
    app.component('ti-example', Example)
  }
}
