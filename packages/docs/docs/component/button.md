<script setup>
const data = [
    {
        label: '苹果',
        value: 'apple'
    },{
        label: '车',
        value: 'car'
    },{
        label: '水',
        value: 'water'
    }
]
</script>

# Button 按钮

## 基础用法
<ti-select width="200px" :options="data" />

``` vue
<template>
    <ti-select width="200px" :options="data" />
</template>
<script setup>
const data = [
    {
        label: '苹果',
        value: 'apple'
    },{
        label: '车',
        value: 'car'
    },{
        label: '水',
        value: 'water'
    }
]
</script>
```

## 多选
<ti-select multiple width="200px" :options="data" />

``` vue
<template>
    <ti-select multiple width="200px" :options="data" />
</template>
<script setup>
const data = [
    {
        label: '苹果',
        value: 'apple'
    },{
        label: '车',
        value: 'car'
    },{
        label: '水',
        value: 'water'
    }
]
</script>
```