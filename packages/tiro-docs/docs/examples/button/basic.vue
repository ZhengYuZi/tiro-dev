<template>
  <div class="button-demo">
    <ti-button v-for="item in type" :key="item" :type="item">BUTTON</ti-button>
  </div>
</template>

<script setup lang="ts">
const type = ['default', 'fill', 'light']
</script>

<style lang="scss" scoped>
.button-demo {
  & > * {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
