<template>
  <div v-if="modelValue" :class="['ti-modal', isDrag ? 'is-drag' : '']">
    <div class="ti-modal-mask"></div>
    <div class="ti-modal-warp">
      <transition name="modal">
        <div v-if="modelValue" class="ti-modal-inner" :style="{ width: width }">
          <div v-drag="{ isDrag: isDrag }" class="ti-modal-title">
            <span class="title--inner">{{ title }}</span>
            <ti-icon
              name="icon-delete"
              :size="20"
              color="#8c8c8c"
              @click="bindClose"
            />
          </div>
          <div class="ti-modal-content">
            <slot></slot>
          </div>
          <div class="ti-modal-footer">
            <div class="footer--inner">
              <ti-button @click="bindCancel">{{ cancelText }}</ti-button>
              <ti-button type="fill" @click="bindConfirm">
                {{ confirmText }}
              </ti-button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import TiIcon from '@tiro/icons'
import TiButton from '../button'
import vDrag from '../../directives/drag'

const emit = defineEmits(['close', 'cancel', 'confirm', 'update:modelValue'])

const props = defineProps({
  width: {
    type: String,
    default: '400px'
  },
  title: {
    type: String,
    default: 'Title'
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确定'
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  isDrag: Boolean
})

const bindCancel = () => {
  emit('cancel')
  emit('update:modelValue', false)
}

const bindConfirm = () => {
  emit('confirm')
  emit('update:modelValue', false)
}

const bindClose = () => {
  emit('close')
  emit('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
@import '../../style/base.scss';
@import './modal.scss';
</style>
