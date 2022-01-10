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