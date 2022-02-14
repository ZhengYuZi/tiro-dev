<script setup>
import GetValue from '../examples/select/getValue.vue'
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
用于选择多个选项

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

## 获取选中项
可以通过 `select` 事件或 `v-model:value` 属性来获取选中项的绑定值

::: show
<GetValue />

``` vue
<template>
    <div class="select-demo">
        <ti-select width="200px" multiple :options="data" @select="select" />
        <span>选中值：{{ selectVal }}</span>
    </div>
    <div class="select-demo">
        <ti-select width="200px" :options="data" v-model:value="selectVal2" />
        <span>选中值：{{ selectVal2 }}</span>
    </div>
</template>

<script setup>
import { ref } from 'vue'

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
const selectVal = ref('')
const selectVal2 = ref('')

const select = (val) => {
    selectVal.value = val
}
</script>
```
:::

## 属性
| 属性 | 类型 | 默认值 | 说明 |
| :----: | :----: | :----: | :----: |
| v-model:value  | string / number / boolean | — | 选中项绑定值 |
| multiple | boolean | false | 是否多选 |
| disabled | boolean | false | 是否禁用 |

## 事件
| 事件名 | 参数 | 说明 |
| :----: | :----: | :----: |
| select | 当前选中值 | 选中值发生变化时触发 |