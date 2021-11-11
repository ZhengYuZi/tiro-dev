<template>
    <button
        class="ti-button"
        :class="[`ti-button--${type}`, disabled ? 'is-disabled':'']"
        :style="`border-radius:${borderRadius}px`"
        type="button"
    >
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { BUTTON_TYPE } from '../../types/button'

const props = defineProps({
    type: {
        type: String as PropType<BUTTON_TYPE>,
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
@import "../../style/base.scss";
@import "./button.scss";
</style>