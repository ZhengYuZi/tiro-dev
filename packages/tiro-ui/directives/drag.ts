export default {
  mounted(el, binding) {
    // isDrag 是否开启drag
    const { isDrag } = binding.value
    if (!isDrag) return

    changeStyle(el)

    const parentEl = el.parentNode
    const { parentLeft, parentTop } = getData(parentEl)

    let parentX = parentLeft
    let parentY = parentTop

    el.addEventListener('mousedown', (e: MouseEvent) => {
      e.preventDefault()

      const { borderX, borderY } = getData(parentEl)

      const diffX = e.clientX - parentX
      const diffY = e.clientY - parentY

      document.onmousemove = function (event) {
        const x = event.clientX - diffX - parentLeft
        const y = event.clientY - diffY - parentTop

        const moveX = isBorder(x, borderX)
        const moveY = isBorder(y, borderY)

        parentEl.style.transform = `translate(${moveX}px,${moveY}px)`
      }

      document.onmouseup = function (event) {
        const { parBorderX, parBorderY } = getData(parentEl)

        parentX = isBorder(event.clientX - diffX, parBorderX)
        parentY = isBorder(event.clientY - diffY, parBorderY)

        this.onmousemove = null
        this.onmouseup = null
      }
    })
  }
}

function changeStyle(el: HTMLElement) {
  el.style.cursor = 'move'
  el.style.userSelect = 'none'
}

function getData(parentEl: HTMLElement) {
  const parentLeft = parentEl.offsetLeft //初始距离左边位置(固定)
  const parentTop = parentEl.offsetTop //初始距离上边位置(固定)
  const borderX = [0 - parentLeft, parentLeft] //横向边界
  const borderY = [0 - parentTop, parentTop] //纵向边界
  const parBorderX = [0, 2 * parentLeft]
  const parBorderY = [0, 2 * parentTop]

  return { parentLeft, parentTop, borderX, borderY, parBorderX, parBorderY }
}

function isBorder(site: number, border: Array<number>) {
  if (site < border[0]) return border[0]
  else if (site > border[1]) return border[1]
  return site
}
