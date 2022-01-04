<template>
    <div class="ti-example">
        <section class="example-box">
            <div class="example-show">
                <slot name="component"></slot>
            </div>
            <div class="example-handle">
                <ti-icon name="icon-code" @click="codeShow" />
                <ti-icon name="icon-copy" @click="codeCopy" />
            </div>
            <div ref="code" class="example-code" v-show="isShow">
                <slot></slot>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useClipboard from 'vue-clipboard3'

const { toClipboard } = useClipboard()

const isShow = ref(false)
const code = ref()

const codeShow = () => {
    isShow.value = !isShow.value
}
const codeCopy = () => {
    copy(code.value.innerText)
}

const copy = async (Msg) => {
    try {
        await toClipboard(Msg)
    } catch (e) {
        console.error(e)
    }
}
</script>

<style scoped>
.ti-example {
    margin: 20px 0px;
}
.example-box {
    border: 1px solid var(--c-border);
    border-radius: 2px;
}
.example-show {
    padding: 30px;
}
.example-handle {
    width: 100%;
    height: 30px;
    border-top: 1px dashed var(--c-border);
    text-align: center;
    color: var(--c-divider-dark);
}
.example-handle > * {
    cursor: pointer;
    padding: 0 5px;
}
.example-handle > *:hover {
    color: var(--c-black);
}
.example-code {
    border-top: 1px dashed var(--c-border);
}
</style>