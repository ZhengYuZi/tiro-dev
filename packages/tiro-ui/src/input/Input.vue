<template>
  <div
    :class="['ti-input', disabled ? 'is-disabled' : null]"
    :style="`width:${width}`"
  >
    <div class="ti-input-box">
      <input
        :class="[
          'ti-input--inner',
          clearable ? 'is-clearable' : null,
          type === types.password ? 'is-password' : null
        ]"
        :style="{ borderRadius: borderRadius + 'px' }"
        :type="inputType"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :value="modelValue"
        :minlength="minlength"
        @focus="inputFocus"
        @blur="inputBlur"
        @change="inputChange"
        @input="inputEnter"
      />
      <div class="ti-input--icon">
        <ti-icon
          v-if="modelValue && clearable"
          class="icon-delete"
          @mousedown.prevent="clearValue"
        ></ti-icon>
        <ti-icon
          v-if="type === types.password && modelValue"
          class="icon-eye"
          @mousedown.prevent="showWord"
        ></ti-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, Ref, ref } from 'vue'
import TiIcon from '@tiro/icons'

const emit = defineEmits([
  'input',
  'change',
  'focus',
  'blur',
  'clear',
  'update:modelValue'
])

const clearIsShow: Ref<boolean> = ref(false)
const inputType: Ref<string> = ref('text')

const types: Input.ITypes = {
  text: 'text',
  password: 'password'
}

const props = defineProps({
  type: {
    type: String as PropType<Input.IType>,
    default: 'text'
  },
  width: {
    type: String,
    default: '100%'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: '请输入'
  },
  clearable: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number]
  },
  borderRadius: {
    type: Number
  },
  maxlength: {
    type: Number
  },
  minlength: {
    type: Number
  }
})

onMounted(() => {
  inputType.value = props.type
})

const inputFocus = (e: Event) => {
  clearIsShow.value = true
  emit('focus', e)
}

const inputBlur = (e: Event) => {
  clearIsShow.value = false
  emit('blur', e)
}

const inputChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('change', value)
}

const inputEnter = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('input', value)
  emit('update:modelValue', value)
}

const clearValue = () => {
  emit('clear', props.modelValue)
  emit('update:modelValue', '')
}

const showWord = () => {
  inputType.value =
    inputType.value === types.password ? types.text : types.password
}
</script>

<style lang="scss" scoped>
@import '../../style/base.scss';
@import './input.scss';
</style>
