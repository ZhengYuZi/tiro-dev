<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-left">
        <div
          class="navbar-list"
          @click="asideOpenStore.updateOpen()"
          v-if="isShow"
        >
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
        <template v-for="item in nav?.themeConfig?.nav" :key="item.link">
          <a
            :href="item.link"
            :class="`${item.link}.html` === path ? 'active' : ''"
            >{{ item.text }}</a
          >
        </template>
        <a href="https://github.com/ZhengYuZi/tiro-dev" target="_blank">
          <ti-icon name="icon-github" :size="18"></ti-icon>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAsideOpenStore } from "../store/useStore.ts"
const asideOpenStore = useAsideOpenStore()

const props = defineProps({
  nav: {
    type: Object,
  },
  path: {
    type: String,
  },
  isShow: {
    type: Number,
  },
})
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
  height: var(--header-height);
  line-height: var(--header-height);
  border-bottom: 1px solid var(--c-border);

  a {
    color: #6e6e6e;
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
      a {
        font-size: 16px;
        padding-left: 20px;
        &.active {
          color: #3370ff;
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
