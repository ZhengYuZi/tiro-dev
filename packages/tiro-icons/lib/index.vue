<template>
  <span
    class="ti-icon"
    :class="name"
    :style="`font-size:${size}px;color:${color};`"
  ></span>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
  },
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
})
</script>

<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id 2623434 */
  src: url('//at.alicdn.com/t/font_2623434_u5g78018q8n.woff2?t=1641260670877') format('woff2'),
       url('//at.alicdn.com/t/font_2623434_u5g78018q8n.woff?t=1641260670877') format('woff'),
       url('//at.alicdn.com/t/font_2623434_u5g78018q8n.ttf?t=1641260670877') format('truetype');
}

.ti-icon {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-code:before {
  content: "\e606";
}

.icon-copy:before {
  content: "\e62b";
}

.icon-eye:before {
  content: "\e8bf";
}

.icon-delete:before {
  content: "\e785";
}

.icon-arrow-right:before {
  content: "\e616";
}

.icon-arrow-left:before {
  content: "\e617";
}

.icon-drop-down:before {
  content: "\e632";
}

.icon-search:before {
  content: "\e78b";
}

</style>
