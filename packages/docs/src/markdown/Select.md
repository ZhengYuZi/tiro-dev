<script setup>
import Input from '../examples/Input.vue'
</script>

### 默认

<Input />

```vue
<template>
    <ti-input v-model="value" width="200px"></ti-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

### Attributes

| **属性Attribute** | **描述Description** | **类型Type** |     **值Accepted Values**      | **默认值**Defaults |
| :-----------: | :-----------------: | :------: | :------------------------: | :------------: |
|  placeholder  |      占位内容       |  string  |             —              |       —        |
|   multiple    |      是否多选       | boolean  |             —              |     false      |
|   disabled    |      是否禁用       | boolean  |             —              |     false      |
|     width     |     选择框宽度      |  string  |     '100px' or '100%'      |     '100%'     |
|    options    |     选择框数据      |  array   | [{value:1,label:'猕猴桃'}] |       []       |
