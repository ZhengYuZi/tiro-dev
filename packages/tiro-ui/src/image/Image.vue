<template>
  <div class="ti-image">
    <div v-if="!isLoading && $slots.placeholder" class="ti-image-error">
      <slot name="placeholder">
        <span v-if="alt">{{ alt }}</span>
        <span>加载失败</span>
      </slot>
    </div>
    <img
      class="ti-image--inner"
      :src="url"
      :alt="alt"
      :style="`object-fit:${fit}`"
      @error="imgError"
      @load="imgLoad"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'

const isLoading = ref(true)

const emit = defineEmits(['error', 'load'])

const props = defineProps({
  url: {
    type: String
  },
  alt: {
    type: String
  },
  fit: {
    type: String as PropType<Image.Fit>
  }
})

const imgError = (e: Event) => {
  emit('error', e)
  isLoading.value = false
}

const imgLoad = (e: Event) => {
  emit('load', e)
  isLoading.value = true
}
</script>

<style lang="scss" scoped>
@import '../../style/base.scss';
@import './image.scss';
</style>
