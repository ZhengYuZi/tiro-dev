<template>
  <div>
    <Header :nav="nav" :path="path" :isShow="contents?.length" />
    <Aside :data="contents" :path="path" v-if="contents?.length" />
    <main class="page" :class="contents?.length ? 'has-sidebar' : ''">
      <div class="container">
        <Content class="content" />
        <Arrow :data="contents" :path="path" />
      </div>
      <aside class="toc" v-if="headers?.length">
        <Headers :headers="headers" />
      </aside>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import Aside from "./Aside.vue"
import Headers from "./Headers.vue"
import Header from "./Header.vue"
import Arrow from './Arrow.vue'
import theme from '../../theme/index.js'
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
  .page {
    display: flex;
    .container {
      flex-grow: 1;
    }
  }
}
.page {
  padding-top: var(--header-height);
  .container {
    margin: 0 auto;
    padding: 1rem 1.5rem 4rem;
    max-width: 52rem;
  }
  .toc {
    width: 200px;
    min-height: 100vh;
  }
}
.content {
  padding-bottom: 1.5rem;
}
@media (max-width: 420px) {
  .content {
    clear: both;
  }
}
</style>