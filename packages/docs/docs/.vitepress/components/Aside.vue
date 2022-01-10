<template>
  <aside class="sidebar">
    <div class="sidebar-brand" @click="LinkTo('/', '')">
      <img src="https://element-plus.gitee.io/images/element-plus-logo.svg" />
    </div>
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
</template>

<script setup lang="ts">
import { useRouter } from "vitepress"
const router = useRouter()
const props = defineProps({
  data: {
    type: Array,
  },
  path: {
    type: String,
  },
  logo: {
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
  router.go(url + suff)
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-sidebar);
  border-right: 1px solid var(--c-divider);
  width: 15rem;
  background-color: var(--c-bg);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.25s ease;

  .sidebar-brand {
    padding: 30px 30px 20px;
    text-align: center;
    cursor: pointer;
    img {
      width: auto;
      height: 40px;
    }
  }

  .sidebar-groups {
    font-size: 15px;
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
      padding: 3px 20px;
      margin: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      &.active {
        color: #3370ff;
        position: relative;
        &:after {
          content: "";
          width: 5px;
          height: 60%;
          background-color: #3370ff;
          position: absolute;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 10px;
        }
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
</style>
