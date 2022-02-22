<template>
  <div class="ti-select" :class="disabled ? 'is-disabled' : ''" :style="`width:${width}`">
    <div class="ti-select-box" @click="downArrowTurn">
      <input
        class="ti-select--inner"
        type="text"
        readonly
        :value="inputValue()"
        :placeholder="placeholder"
        @blur="handleBlur"
        :disabled="disabled"
      />
      <ti-icon class="icon-drop-down" :class="isFocus ? 'is-reserve' : ''"></ti-icon>
    </div>
    <div class="ti-select-dropdown" v-show="isFocus">
      <div class="ti-select-options ti-scrollbar">
        <div
          class="ti-select-option-item"
          :class="handleActive(index)"
          v-for="(item, index) in options"
          :key="item.label + item.value"
          @mousedown="handleSelect(index)"
        >{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, Ref, ref } from "vue"
import TiIcon from '@tiro/icons'

const emit = defineEmits(["select", "update:value"])

const isFocus: Ref<boolean> = ref(false)
const isActive: Ref<number> = ref(-1)
const actives: Ref<Array<number>> = ref([])
const activesValue: Ref<Array<Select.IOptionValue>> = ref([])

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  placeholder: {
    type: String,
    default: "请选择",
  },
  options: {
    type: Array as PropType<Select.IOptions>,
    default: [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String as PropType<Select.IOptionValue>,
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
  emit("select", select)
  emit("update:value", select)
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

  emit("select", activesValue.value)
  emit("update:value", activesValue.value)
}

const handleActive = (index: number): "active" | "" => {
  if (!props.multiple) return isActive.value === index ? "active" : ""
  return actives.value.includes(index) ? "active" : ""
}

const inputValue = (): string => {
  if (!props.multiple) return props.options[isActive.value]?.label
  return actives.value.reduce((total, item) => {
    return props.options[item]?.label + `${total ? "," : ""}` + total
  }, "")
}
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
@import "./select.scss";
</style>
