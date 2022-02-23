<template>
  <div
    :class="['ti-select', disabled ? 'is-disabled' : '']"
    :style="{ width: width }"
  >
    <div class="ti-select-box" @click="downArrowTurn">
      <input
        class="ti-select--inner"
        type="text"
        readonly
        :value="inputValue()"
        :placeholder="placeholder"
        :disabled="disabled"
        @blur="handleBlur"
        @input="inputValue()"
      />
      <ti-icon
        :class="['icon-drop-down', isFocus ? 'is-reserve' : '']"
      ></ti-icon>
    </div>
    <div v-show="isFocus" class="ti-select-dropdown">
      <div class="ti-select-options ti-scrollbar">
        <div
          v-for="(item, index) in options"
          :key="item.label + item.value"
          :class="['ti-select-option-item', handleActive(index)]"
          @mousedown="handleSelect(index)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, Ref, ref } from 'vue'
import TiIcon from '@tiro/icons'

const emit = defineEmits(['select', 'update:modelValue'])

const isFocus: Ref<boolean> = ref(false)
const isActive: Ref<number> = ref(-1)
const actives: Ref<Array<number>> = ref([])
const activesValue: Ref<Array<Select.IOptionValue>> = ref([])

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  options: {
    type: Array as PropType<Select.IOptions>,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Boolean, Number, Array] as PropType<
      Select.IOptionValue | Select.IOptionValue[]
    >,
    default: ''
  }
})

const downArrowTurn = () => {
  if (props.disabled) return
  isFocus.value = !isFocus.value
}

const handleBlur = () => {
  if (isFocus.value) isFocus.value = false
}

const handleSelect = (index: number) => {
  props.multiple ? multipleSelect(index) : singleSelect(index)
}

const singleSelect = (index: number) => {
  isActive.value = index
  const select = props.options[index].value
  emit('select', select)
  emit('update:modelValue', select)
}

const multipleSelect = (index: number) => {
  const activeIndex = actives.value.indexOf(index)
  const notExist = -1

  if (activeIndex === notExist) {
    actives.value.push(index)
    activesValue.value.push(props.options[index]?.value)
  } else {
    actives.value.splice(activeIndex, 1)
    activesValue.value.splice(activeIndex, 1)
  }

  emit('select', activesValue.value)
  emit('update:modelValue', activesValue.value)
}

const handleActive = (index: number): 'active' | '' => {
  if (!props.multiple) return isActive.value === index ? 'active' : ''
  return actives.value.includes(index) ? 'active' : ''
}

const inputValue = (): string => {
  if (!props.multiple) return props.options[isActive.value]?.label
  return actives.value.reduce((total, item) => {
    return `${props.options[item]?.label}${total ? ',' : ''}${total}`
  }, '')
}
</script>

<style lang="scss" scoped>
@import '../../style/base.scss';
@import './select.scss';
</style>
