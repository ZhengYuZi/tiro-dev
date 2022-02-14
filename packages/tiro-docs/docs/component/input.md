<script setup>
import { ref } from 'vue'
const input = ref('')
const input1 = ref('')
const input2 = ref('')
</script>

# Input 输入框

## 基础用法
::: show
<ti-input width="200px" v-model="input" />

``` vue
<template>
  <ti-input width="200px" v-model="input" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
</script>
```
:::

## 清空按钮
::: show
<ti-input width="200px" v-model="input1" clearable />

``` vue
<template>
  <ti-input width="200px" v-model="input" clearable />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
</script>
```
:::

## 禁用
::: show
<ti-input width="200px" v-model="input2" disabled />

``` vue
<template>
  <ti-input width="200px" v-model="input" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
</script>
```
:::

## 属性
| 属性 | 类型 | 默认值 | 说明 |
| :----: | :----: | :----: | :----: |
| width  | xx'%' / xx'px' | "100%" | input长度 |
| borderRadius  | xx'%' / xx'px' | "2px" | input圆角 |
| placeholder  | string | "请输入" | 占位符 |
| modelValue  | string / number | — | 绑定值 |
| disabled | boolean | false | 是否禁用 |
| maxlength | number | — | 最大输入长度 |
| minlength | number | — | 最小输入长度 |
| clearable | boolean | false | 是否可清空 |

## 事件
| 事件名 | 参数 | 说明 |
| :----: | :----: | :----: |
| blur | (event: Event) | 在 Input 失去焦点时触发 |
| focus | (event: Event) | 在 Input 获得焦点时触发 |
| change | (value: string \| number) | 仅在输入框失去焦点或用户按下回车时触发 |
| input | (value: string \| number) | 在 Input 值改变时触发 |
| clear | — | 在点击由 clearable 点击清空按钮时触发 |