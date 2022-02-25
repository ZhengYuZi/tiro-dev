import type { App } from 'vue'
import Modal from './Modal.vue'

Modal.install = function (app: App) {
  app.component('TiModal', Modal)
}

export const TiModal = Modal

export default Modal
