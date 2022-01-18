import { onMounted, onUnmounted } from 'vue'
import { throttle } from '../utils/index.js'

export default function useActiveLink(activeIndex) {

  const onScroll = throttle(setActiveLink, 150)

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  })

  onUnmounted(()=>{
    window.removeEventListener('scroll', onScroll)
  })
  
  function setActiveLink() {
    const links = getLinks()

    if(!links.length) {
      window.removeEventListener('scroll', onScroll)
      return
    }

    const anchors = getAnchors(links)

    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i]
      const nextAnchor = anchors[i + 1]
      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor)
      if (isActive) {
        history.replaceState(
          null,
          document.title,
          hash ? hash : ' '
        )
        hash ? (activeIndex.value = i) : (activeIndex.value = -1)
        return
      }
    }
  }
}

function getLinks() {
  return Array.from(
    document.querySelectorAll('.toc .toc-link')
  )
}

function getAnchors(sidebarLinks) {
  return (
    Array.from(document.querySelectorAll('.content .header-anchor'))
  ).filter((anchor) =>
    sidebarLinks.some((sidebarLink) => {
      return sidebarLink.hash === anchor.hash
    })
  )
}

function getPageOffset() {
  return (document.querySelector('.navbar')).offsetHeight
}

function getAnchorTop(anchor) {
  const pageOffset = getPageOffset()
  try {
    return anchor.parentElement.offsetTop - pageOffset - 15
  } catch (e) {
    return 0
  }
}

function isAnchorActive(
  index,
  anchor,
  nextAnchor
) {
  const scrollTop = window.scrollY
  if (index === 0 && scrollTop === 0) {
    return [true, null]
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null]
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, decodeURIComponent(anchor.hash)]
  }
  return [false, null]
}