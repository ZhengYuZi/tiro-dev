<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')

const data = [
  {
    label: '苹果',
    value: 'apple'
  },
  {
    label: '车',
    value: 'car'
  },
  {
    label: '水',
    value: 'water'
  }
]

const bindClick = () => {
  //console.log(input.value)
}
</script>

<template>
  <div class="main">
    <ti-select v-model="input" width="200px" :options="data" />
    <ti-button @click="bindClick">click</ti-button>
  </div>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    & > * {
      margin: 10px 0;
    }
  }
}
</style>
