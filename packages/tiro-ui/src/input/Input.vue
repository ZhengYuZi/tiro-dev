<template>
  <div
    class="ti-input"
    :class="[disabled ? 'is-disabled' : null]"
    :style="`width:${width}`"
  >
    <div class="ti-input-box">
      <input
        class="ti-input--inner"
        :class="[clearable ? 'is-sign' : null]"
        :style="`border-radius:${borderRadius}px`"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        @focus="inputFocus"
        @blur="inputBlur"
        @change="inputChange"
        @input="inputEnter"
        :value="modelValue"
        :maxlength="maxlength"
        :minlength="minlength"
      />
      <span class="ti-input--icon ti-icon" v-if="clearable && modelValue && clearIsShow">
        <span @mousedown.prevent="clearValue">&#xe785;</span>
        <span>&#xe8bf;</span>
      </span>
      <!-- <span class="ti-input--icon ti-icon" v-if="type === types.password">&#xe8bf;</span> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, Ref, ref } from "vue"
import { ITypes, IType } from "../../types/input"

const emit = defineEmits([
  "input",
  "change",
  "focus",
  "blur",
  "clear",
  "update:modelValue",
])

const clearIsShow: Ref<boolean> = ref(false)

const types: ITypes = {
  text: "text",
  password: "password",
  textarea: "textarea",
}

const props = defineProps({
  type: {
    type: String as PropType<IType>,
    default: "text",
  },
  width: {
    type: String,
    default: "100%",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "请输入",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
  },
  borderRadius: {
    type: Number,
  },
  maxlength: {
    type: Number,
  },
  minlength: {
    type: Number,
  },
})

const inputFocus = (e: Event) => {
  clearIsShow.value = true
  emit("focus", e)
}

const inputBlur = (e: Event) => {
  clearIsShow.value = false
  emit("blur", e)
}

const inputChange = (e: Event) => {
  const value = (<HTMLInputElement>e.target).value
  emit("change", value)
}

const inputEnter = (e: Event) => {
  const value = (<HTMLInputElement>e.target).value
  emit("update:modelValue", value)
}

const clearValue = () => {
  emit("clear", props.modelValue)
  emit("update:modelValue", "")
}
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
@import "./input.scss";
</style>
