<template>
  <div class="main">
    <ti-modal
      v-model="isOpen"
      is-drag
      width="300px"
      title="Here is the Title"
      @cancel="cancel"
      @confirm="confirm"
    >
      <div>11111</div>
      <div>11111</div>
    </ti-modal>
    <ti-select v-model="input" width="200px" :options="data" />
    <ti-button @click="bindClick">click</ti-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
const isOpen = ref(false)

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
  isOpen.value = true
}

const cancel = () => {
  //console.log('取消')
}

const confirm = () => {
  //console.log('确定')
}
</script>

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
