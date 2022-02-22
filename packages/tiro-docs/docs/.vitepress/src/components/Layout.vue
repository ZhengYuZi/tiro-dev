<template>
  <Navbar :nav="nav" :path="path" :isShow="contents?.length" />
  <Aside :data="contents" :path="path" v-if="contents?.length" />
  <main class="page" :class="contents?.length ? 'has-sidebar' : ''">
    <div class="page-box">
      <div class="container">
        <Content class="content" />
        <Arrow :data="contents" :path="path" />
      </div>
      <aside class="toc" v-if="headers?.length">
        <Headers :headers="headers" />
      </aside>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import Aside from "./Aside.vue"
import Headers from "./Headers.vue"
import Navbar from "./Navbar.vue"
import Arrow from "./Arrow.vue"
import theme from "../../theme/index"
import { useRoute, useData } from "vitepress"
const route = useRoute()
const contents = ref([])
const { page, site } = useData()
const headers = ref([])
const nav = ref({})
const path = ref("")

watch(route, (val) => {
  changeValue(val)
})

onMounted(() => {
  nav.value = site.value
  changeValue(route)
})

function changeValue(val) {
  contents.value = findValue(site.value.themeConfig.sidebar, val.path)
  path.value = val.path
  headers.value = val.component === theme.NotFound ? [] : page.value.headers
}

function findValue(obj: object, str: string) {
  const slash = "/"
  const baseRoute = slash + route.path.split(slash)[1]
  return obj[baseRoute] || []
}
</script>

<style lang="scss" scoped>
@media (min-width: 720px) {
  .has-sidebar {
    margin-left: 15rem;
  }
}
@media (min-width: 960px) {
  .has-sidebar {
    margin-left: 17rem;
  }
}
@media (max-width: 1200px) {
  .page {
    .toc {
      display: none;
    }
  }
}
@media (min-width: 1200px) {
  .page-box {
    display: flex;
    .container {
      flex-grow: 1;
    }
  }
}
.page {
  padding-top: var(--header-height);
  background-color: var(--c-bg);
  color: var(--c-text);
  .page-box {
    .container {
      margin: 0 auto;
      padding: 1rem 1.5rem;
      max-width: 52rem;
    }
    .toc {
      width: 200px;
      position: fixed;
      right: 70px;
      top: 200px;
    }
  }
  &.has-sidebar {
    .toc {
      position: static !important;
    }
  }
}
</style>
