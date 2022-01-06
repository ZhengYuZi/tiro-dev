<template>
  <div>
    <Aside :data="contents" v-if="contents" />
    <main class="page" :class="contents ? 'has-sidebar' : ''">
      <div class="container">
        <Content class="content" />
        <div @click="linkTo">1111</div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import Aside from "./Aside.vue"
import { useRoute, useRouter } from "vitepress"
import config from "../config.js"
const route = useRoute()
const router = useRouter()
const contents = ref([])

watch(route, (val) => {
  contents.value = findValue(config.themeConfig.sidebar, val.path, "/")
  console.log(contents.value)
})

onMounted(() => {
  contents.value = findValue(config.themeConfig.sidebar, route.path, "/")
  console.log(contents.value)
})

const linkTo = () => {
  router.go("/guide/guide.html")
}

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
.container {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
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
