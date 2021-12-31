<template>
    <div class="ti-example">
        <section class="example-box">
            <div class="example-show">
                <slot name="component"></slot>
            </div>
            <div class="example-handle">
                <ti-icon name="icon-eye" @click="codeShow" />
            </div>
            <div class="example-code" v-show="isShow">
                <slot></slot>
            </div>
        </section>
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
.example-box {
    border: 1px solid #f0f0f0;
    border-radius: 2px;
}
.example-show {
    padding: 30px;
}
.example-handle {
    width: 100%;
    height: 30px;
    border-top: 1px dashed #f0f0f0;
    text-align: center;
    color: #cccccc;
}
.example-handle > * {
    cursor: pointer;
}
.example-code {
    border-top: 1px dashed #f0f0f0;
}
</style>