<template>
  <div class="select-demo">
    <ti-select width="200px" multiple :options="data" @select="select" />
    <span>选中值：{{ selectVal }}</span>
  </div>
  <div class="select-demo">
    <ti-select v-model:value="selectVal2" width="200px" :options="data" />
    <span>选中值：{{ selectVal2 }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
const selectVal = ref('')
const selectVal2 = ref('')

const select = (val) => {
  selectVal.value = val
}
</script>

<style lang="scss" scoped>
.select-demo {
  padding: 10px 0;
  display: flex;
  align-items: center;
  & > * {
    margin-right: 20px;
  }
}
</style>
