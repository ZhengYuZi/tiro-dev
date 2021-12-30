import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './mweb-lark.css'
import ti from '@tiro/ui'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ti)
  },
}
