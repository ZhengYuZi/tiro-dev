<template>
  <div
    class="ti-input"
    :class="[disabled ? 'is-disabled' : null]"
    :style="`width:${width}`"
  >
    <div class="ti-input-box">
      <input
        class="ti-input--inner"
        :class="[clearable ? 'is-clearable' : null, type === types.password ? 'is-password' : null]"
        :style="`border-radius:${borderRadius}`"
        :type="inputType"
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
      <div class="ti-input--icon">
        <ti-icon class="icon-delete" v-if="modelValue && clearable" @mousedown.prevent="clearValue"></ti-icon>
        <ti-icon class="icon-eye" v-if="type === types.password && modelValue" @mousedown.prevent ="showWord"></ti-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, Ref, ref } from "vue"
import { ITypes, IType } from "../../types/input"

const emit = defineEmits([
  "input",
  "change",
  "focus",
  "blur",
  "clear",
  "update:modelValue"
])

const clearIsShow: Ref<boolean> = ref(false)
const inputType: Ref<string> = ref('text')

const types: ITypes = {
  text: "text",
  password: "password",
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

onMounted(()=>{
  inputType.value = props.type
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
  emit("input", value)
  emit("update:modelValue", value)
}

const clearValue = () => {
  emit("clear", props.modelValue)
  emit("update:modelValue", "")
}

const showWord = ()=>{
  inputType.value = inputType.value === types.password ? types.text : types.password
}
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
@import "./input.scss";
</style>
