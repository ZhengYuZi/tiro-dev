<template>
  <div class="boom-page">
    <div
      class="boom-area"
      ref="boomArea"
      :style="`width:${row * 32}px;height:${column * 32}px`"
    >
      <div
        class="boom-item"
        v-for="(item, index) of row * column"
        :key="item"
        :style="`background-image: url('${plants[setPlants()].url}')`"
        @click="handleSweep(index)"
        @contextmenu.prevent="handleTip(index)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
const row = ref(9)
const column = ref(9)
const mineNum = ref(10)
const mines = ref([])
const boomArea = ref(null)
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

const tip = {
  name: "tip",
  url: "./images/tip.png",
}

const blank = {
  name: "blank",
  url: "./images/blank.png",
}

onMounted(()=>{
  mines.value = setMines()
})

const setPlants = () => {
  return Math.round(Math.random() * (plants.length - 1))
}

const setMines = () => {
  let mines = []
  while (mines.length < mineNum.value) {
    const index = Math.round(Math.random() * (row.value * column.value - 1))
    if(mines.indexOf(index) === -1) {
      mines.push(index)
    }
  }
  return mines
}

function handleSweep(index) {
  if(mines.value.indexOf(index) === -1) {
    boomArea.value.children[index].style.backgroundImage = `url('${blank.url}')`
    // isBoomArea(index-1) && handleSweep(index-1)
    // isBoomArea(index+1) && handleSweep(index+1)
    // isBoomArea(index+8) && handleSweep(index+8)
    // isBoomArea(index+9) && handleSweep(index+9)
    // isBoomArea(index+10) && handleSweep(index+10)
    // isBoomArea(index-8) && handleSweep(index-8)
    // isBoomArea(index-9) && handleSweep(index-9)
    // isBoomArea(index-10) && handleSweep(index-10)
  }
}

const handleTip = (index) =>{
  boomArea.value.children[index].style.backgroundImage = `url('${tip.url}')`
}

function isBoomArea(index) {
  return index >= 0
}

</script>

<style lang="scss" scoped>
.boom-page {
  height: calc(100vh - var(--header-height) - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
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
