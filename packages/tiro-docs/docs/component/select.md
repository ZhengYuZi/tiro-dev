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

# Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法
适用广泛的基础单选 `v-model` 的值为当前被选中的 `options` 的 value 属性值

::: show
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
:::

## 多选
适用性较广的基础多选，用 Tag 展示已选项

::: show
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
:::

## 禁用

禁用整个选择器组件
为 `ti-select` 设置 `disabled` 属性，则整个选择器不可用。

::: show
<ti-select disabled width="200px" :options="data" />

``` vue
<template>
    <ti-select disabled width="200px" :options="data" />
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
:::

## 清空

包含清空按钮，可将选择器清空为初始状态
为 `ti-select` 设置 `clearable` 属性，则可将选择器清空。 需要注意的是，`clearable` 属性仅适用于单选。

::: show
<ti-select clearable width="200px" :options="data" />

``` vue
<template>
    <ti-select clearable width="200px" :options="data" />
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
:::