import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import TiroUi from '@tiro/ui'

import 'highlight.js/styles/github.css';
import './style/github-markdown.css'

createApp(App).use(TiroUi).use(router).mount('#app')
