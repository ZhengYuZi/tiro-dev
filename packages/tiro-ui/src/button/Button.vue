<template>
    <button
        class="ti-button"
        :class="[`ti-button--${type}`]"
        :style="`border-radius:${borderRadius}px`"
        type="button"
    >
        <span>
            <slot>点击</slot>
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
    }
})
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
@import "./button.scss";
</style>