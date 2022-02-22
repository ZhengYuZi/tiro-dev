// @ts-ignore
import DefaultTheme from 'vitepress/theme'
import Layout from '../src/components/Layout.vue'
import '../src/style/custom.css'
import '../src/style/mweb-lark.css'
import ti from '@tiro/ui'
import Example from '../src/components/example.vue'
import store from '../src/store/index'

const NotFound = DefaultTheme.NotFound

export default {
  NotFound,
  Layout,
  enhanceApp({ app }) {
    app.use(store)
    app.use(ti)
    app.component('ti-example', Example)
  }
}
