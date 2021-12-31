<template>
    <div class="ti-example">
        <div class="example-show">
            <slot name="component"></slot>
        </div>
        <div @click="codeShow">点击</div>
        <div class="example-code" v-show="isShow">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const isShow = ref(false)
const codeShow = () => {
    isShow.value = !isShow.value
}
</script>

<style scoped>
.ti-example {
    margin: 20px 0px;
}
</style>