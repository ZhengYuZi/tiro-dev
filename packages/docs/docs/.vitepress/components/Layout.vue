<template>
  <div>
    <Aside :data="contents" :path="path" :logo="logo" v-if="contents" />
    <main class="page" :class="contents ? 'has-sidebar' : ''">
      <div class="container">
        <Content class="content" />
      </div>
      <div class="toc">
        <Headers />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import Aside from "./Aside.vue"
import Headers from "./Headers.vue"
import { useRoute } from "vitepress"
import config from "../config.js"
const route = useRoute()
const contents = ref([])
const path = ref("")
const logo = ref("")

watch(route, (val) => {
  contents.value = findValue(config.themeConfig.sidebar, val.path, "/")
  path.value = val.path
})

onMounted(() => {
  contents.value = findValue(config.themeConfig.sidebar, route.path, "/")
  logo.value = config.themeConfig.logo
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
.page {
  display: flex;
  .container {
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
    max-width: 48rem;
  }
  .toc {
    width: 200px;
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
