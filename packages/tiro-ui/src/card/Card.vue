<template>
  <div :class="['ti-card', tiro ? 'tiro' : '', shadow + '-shadow']">
    <div class="ti-card--inner">
      <div v-if="$slots.header" class="ti-card--header">
        <slot name="header">
          <span>标题</span>
        </slot>
      </div>
      <div class="el-card__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tiro: {
    type: Boolean,
    default: false
  },
  shadow: {
    type: String,
    default: 'always'
  }
})
</script>

<style lang="scss" scoped>
@import '../../style/base.scss';
@import './card.scss';
</style>
