<template>
  <div class="boom-page">
    <div
      class="boom-area"
      :style="`width:${row * 32}px;height:${column * 32}px`"
    >
      <div
        class="boom-item"
        v-for="item of row * column"
        :style="`background-image: url('${plants[setPlants()].url}')`"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const row = ref(9)
const column = ref(9)
const plants = [
  {
    name: "flower",
    url: "./images/flower.png",
  },
  {
    name: "grass",
    url: "./images/grass.png",
  },
  {
    name: "tree",
    url: "./images/tree.png",
  },
]

const tip = {
  name: "tip",
  url: "./images/tip.png",
}

const setPlants = () => {
  return Math.round(Math.random() * (plants.length - 1))
}
</script>

<style lang="scss" scoped>
.boom-page {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15%;
  .boom-area {
    display: grid;
    grid-template-columns: repeat(auto-fill, 32px);
    .boom-item {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
