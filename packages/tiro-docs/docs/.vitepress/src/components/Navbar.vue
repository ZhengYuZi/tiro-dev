<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-left">
        <div class="navbar-list" @click="asideStore.updateOpen()" v-if="isShow">
          <ti-icon name="icon-list" :size="30"></ti-icon>
        </div>
        <div class="navbar-logo">
          <a href="/">
            <img :src="nav?.themeConfig?.logo" />
            {{ nav?.title }}
          </a>
        </div>
      </div>
      <div class="navbar-content">
        <div class="navbar-content--inner">
          <ti-icon
            :name="mode"
            :size="22"
            @click="toggleMode"
            title="切换模式（dark or light）"
          ></ti-icon>
          <template v-for="item in nav?.themeConfig?.nav" :key="item.link">
            <a :href="item.link" :class="isNav(item)">{{ item.text }}</a>
          </template>
          <a href="https://github.com/ZhengYuZi/tiro-dev" target="_blank">
            <ti-icon name="icon-github" :size="18"></ti-icon>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAsideStore } from '../store/useStore.ts'
const asideStore = useAsideStore()
const sun = 'icon-sun'
const moon = 'icon-moon'
const mode = ref(moon)

const props = defineProps({
  nav: {
    type: Object
  },
  path: {
    type: String
  },
  isShow: {
    type: Number
  }
})

onMounted(() => {
  const html = document.documentElement
  const modeValue = localStorage.getItem('mode')
  if (modeValue) {
    mode.value = modeValue
    if (modeValue === sun) html.classList.add('dark')
  }
})

const isNav = (item) => {
  if (item.base && props.path.includes(item.base)) {
    return 'active'
  }
  return `${item.link}.html` === props.path ? 'active' : ''
}

const toggleMode = () => {
  const html = document.documentElement
  if (mode.value === moon) {
    mode.value = sun
    html.classList.add('dark')
  } else {
    mode.value = moon
    html.classList.remove('dark')
  }
  localStorage.setItem('mode', mode.value)
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-navbar);
  width: 100%;
  background-color: var(--c-bg);
  color: var(--c-text);
  height: var(--header-height);
  line-height: var(--header-height);
  border-bottom: 1px solid var(--c-border);

  .ti-icon {
    cursor: pointer;
  }

  a {
    color: var(--c-text);
    text-decoration: none;
  }

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 60px;

    .navbar-left {
      height: 100%;
      display: flex;
      align-items: center;

      .navbar-logo {
        height: 60%;
        a {
          font-size: 22px;
          display: flex;
          height: 100%;
          align-items: center;
        }
        img {
          width: auto;
          height: 100%;
          padding-right: 5px;
        }
      }

      .navbar-list {
        height: 100%;
        margin-right: 10px;
      }
    }
    .navbar-content {
      max-width: 55%;
      height: 100%;
      .navbar-content--inner {
        height: 100%;
        display: flex;
        align-items: center;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        & > * {
          padding-left: 20px;
        }
        a {
          font-size: 16px;
          &.active {
            color: var(--c-active);
          }
        }
      }
    }
  }
}

@media (max-width: 720px) {
  .container {
    margin: 0 20px !important;
  }
}

@media (min-width: 720px) {
  .navbar-list {
    display: none;
  }
}
</style>
