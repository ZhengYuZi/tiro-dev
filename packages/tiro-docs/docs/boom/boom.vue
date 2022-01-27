<template>
  <div class="boom-page">
    <div class="boom-area" :style="`width:${row * squareWidth}px;height:${column * squareWidth}px`">
      <canvas id="minesweeper"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import Minesweeper from './minesweeper'
const row = ref(9)
const column = ref(9)
const squareWidth = ref(32)
const mines = ref(10)
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
  }
]

onMounted(() => {
  const minesweeper = new Minesweeper(row.value, column.value, squareWidth.value)
  minesweeper.rect(plants, mines.value)
})

</script>

<style lang="scss" scoped>
.boom-page {
  height: calc(100vh - var(--header-height) - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
