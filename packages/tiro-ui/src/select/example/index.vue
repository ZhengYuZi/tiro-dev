<template>
    <h1>Select选择器</h1>
    <h2>基础用法</h2>
    <ti-select width="200px" placeholder="请选择" :options="options" @select="handleSelect"></ti-select>
    <h2>禁用状态</h2>
    <ti-select width="200px" disabled placeholder="请选择" :options="options" @select="handleSelect"></ti-select>
    <h2>多选</h2>
    <ti-select width="200px" multiple placeholder="请选择" :options="options" @select="handleSelect"></ti-select>
</template>

<script setup lang="ts">
import TiSelect from '../Select.vue'
import { ref } from 'vue';

const options = ref([
    {
        value: 'mihoutao',
        label: '猕猴桃'
    }, {
        value: 'xiangjiao',
        label: '香蕉'
    }, {
        value: 'juzi',
        label: '橘子'
    }, {
        value: 'liulian',
        label: '榴莲'
    }
])

const handleSelect = (value: string) => {
    console.log(value)
}

</script>

<style lang="scss" scoped>
</style>