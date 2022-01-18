<template>
  <aside class="sidebar" :class="asideOpenStore.open ? 'open' : ''">
    <div class="sidebar-groups">
      <section v-for="title in data" :key="title">
        <p class="sidebar-group-title">{{ title.text }}</p>
        <ul>
          <li
            v-for="item in title.children"
            :key="item"
            :class="isActive(item.link)"
            @click="LinkTo(item.link)"
          >
            {{ item.text }}
          </li>
        </ul>
      </section>
    </div>
  </aside>
  <div
    class="sidebar-mask--"
    v-if="asideOpenStore.open"
    @click="asideOpenStore.updateClose()"
  ></div>
</template>

<script setup lang="ts">
import { useRouter } from "vitepress"
import { useAsideOpenStore } from "../store/asideOpen.ts"

const asideOpenStore = useAsideOpenStore()
const router = useRouter()
const props = defineProps({
  data: {
    type: Array,
  },
  path: {
    type: String,
  },
})
const suffix = ".html"

const isActive = (link: string) => {
  if (link + suffix === props.path) {
    return "active"
  }
  return ""
}

const LinkTo = (url, suff = suffix) => {
  asideOpenStore.updateClose()
  router.go(url + suff)
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: var(--header-height);
  bottom: 0;
  left: 0;
  z-index: var(--z-index-sidebar);
  border-right: 1px solid var(--c-border);
  width: 15rem;
  background-color: var(--c-bg);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.25s ease;

  .sidebar-groups {
    padding-top: 20px;
    font-size: 14px;
    .sidebar-group-title {
      padding-left: 30px;
      font-weight: 600;
    }
    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      color: #6e6e6e;
      padding: 6px 20px;
      margin: 4px 20px;
      cursor: pointer;
      &.active {
        color: #3370ff;
        background-color: var(--c-white-dark);
      }
      &:hover {
        color: #3370ff;
      }
    }
  }
}
@media (min-width: 720px) {
  .sidebar {
    transform: translateX(0);
  }
}
@media (min-width: 960px) {
  .sidebar {
    width: 17rem;
  }
}
.sidebar.open {
  transform: translateX(0);
}
.sidebar-mask-- {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
}
</style>
