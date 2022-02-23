<template>
  <button
    :class="['ti-button', `ti-button--${type}`, disabled ? 'is-disabled' : '']"
    :style="`border-radius:${borderRadius}px`"
    type="button"
  >
    <div class="ti-button--inner">
      <span>
        <slot></slot>
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<Button.BUTTON_TYPE>,
    default: 'default'
  },
  borderRadius: {
    type: Number
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
@import '../../style/base.scss';
@import './button.scss';
</style>
