import type { App } from "vue"
import Image from "./Image.vue"

Image.install = function (app: App) {
  app.component('ti-image', Image)
}

export const ImageComponent = Image

export default Image
