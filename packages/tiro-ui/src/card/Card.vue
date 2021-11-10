<template>
    <div class="ti-card" :class="[tiro ? 'tiro':'', shadow + '-shadow']">
        <div class="ti-card--inner">
            <div class="ti-card--header" ref="header" v-if="isHeader">
                <slot name="header"></slot>
            </div>
            <div class="el-card__body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

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

const header = ref(null)
const isHeader = ref(true)

onMounted(()=>{
    if(!header.value.innerHTML) isHeader.value = false
})

</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
@import './card.scss';
</style>