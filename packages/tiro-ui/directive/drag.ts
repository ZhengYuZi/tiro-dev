export default {
  mounted(el, binding) {
    const { isDrag } = binding.value
    if (!isDrag) return

    el.style.cursor = 'move'

    const parentEl = el.parentNode
    const parentX = parentEl.offsetLeft
    const parentY = parentEl.offsetTop
    let diffX = null
    let diffY = null

    el.addEventListener('mousedown', (e) => {
      if (diffX === null) {
        diffX = e.clientX - parentX
        diffY = e.clientY - parentY
      }

      document.onmousemove = function (event) {
        const moveX = event.clientX - diffX - parentX
        const moveY = event.clientY - diffY - parentY

        parentEl.style.transform = `translate(${moveX}px,${moveY}px)`
      }

      document.onmouseup = function () {
        this.onmousemove = null
        this.onmouseup = null
      }
    })
  }
}
