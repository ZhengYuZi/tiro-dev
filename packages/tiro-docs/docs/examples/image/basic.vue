<template>
  <div class="image-demo">
    <div v-for="fit in fits" :key="fit" class="image-demo-item">
      <ti-image
        style="width: 100px; height: 100px"
        :url="url"
        :fit="fit"
      ></ti-image>
      <span class="describe">{{ fit }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const fits = ["fill", "contain", "cover", "none", "scale-down"]
const url = "/cat.jpg"
</script>

<style lang="scss" scoped>
.image-demo {
  display: flex;
  justify-content: space-around;
  .image-demo-item {
    font-size: 14px;
    text-align: center;
  }
}
</style>
