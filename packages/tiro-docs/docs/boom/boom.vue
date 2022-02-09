<template>
  <div class="boom-page">
    <div class="boom-area">
      <div>
        <span @click="clear">重开</span>
      </div>
      <canvas id="minesweeper"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import Minesweeper from './minesweeper'
const row = ref(9)
const column = ref(9)
const squareWidth = ref(30)
const mines = ref(10)

let minesweeper

onMounted(() => {
  minesweeper = new Minesweeper(row.value, column.value, squareWidth.value)
  minesweeper.rect(mines.value)
})

const clear = () =>{
  minesweeper.reOpen()
}

</script>

<style lang="scss" scoped>
.boom-page {
  height: calc(100vh - var(--header-height) - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
