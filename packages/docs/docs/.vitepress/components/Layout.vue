<template>
  <div>
    <Aside :data="contents" :path="path" :logo="logo" v-if="contents" />
    <main class="page" :class="contents ? 'has-sidebar' : ''">
      <div class="container">
        <Content class="content" />
      </div>
      <aside class="toc" v-if="headers">
        <Headers :headers="headers" />
      </aside>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import Aside from "./Aside.vue"
import Headers from "./Headers.vue"
import { useRoute, useData } from "vitepress"
const route = useRoute()
const contents = ref([])
const { page, site } = useData()
const headers = ref([])
const path = ref("")
const logo = ref("")

watch(route, (val) => {
  contents.value = findValue(site.value.themeConfig.sidebar, val.path, "/")
  path.value = val.path
  headers.value = page.value.headers
})

onMounted(() => {
  contents.value = findValue(site.value.themeConfig.sidebar, route.path, "/")
  headers.value = page.value.headers
  logo.value = site.value.themeConfig.logo
  path.value = route.path
})

function findValue(obj: object, str: string, judgeValue: string | number) {
  const keys = Object.keys(obj)
  let value = false
  keys.map((item) => {
    if (judgeValue + 1 && judgeValue !== "" && item === judgeValue) return
    if (str.includes(item)) {
      value = obj[item]
    }
  })
  return value
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
.page {
  display: flex;
  .container {
    flex-grow: 1;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    max-width: 52rem;
  }
  .toc {
    width: 150px;
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
