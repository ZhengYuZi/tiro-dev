import { defineStore } from 'pinia'

export const useAsideStore = defineStore({
  id: 'aside',
  state: () => {
    return {
      open: false
    }
  },
  actions: {
    updateOpen() {
      !this.open && (this.open = !this.open)
    },
    updateClose() {
      this.open && (this.open = !this.open)
    }
  }
})
