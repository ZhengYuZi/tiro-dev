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
  font-family: "ti-icon"; /* Project id 2623434 */
  src: url('//at.alicdn.com/t/font_2623434_299sqm2i2zx.woff2?t=1642475459700') format('woff2'),
       url('//at.alicdn.com/t/font_2623434_299sqm2i2zx.woff?t=1642475459700') format('woff'),
       url('//at.alicdn.com/t/font_2623434_299sqm2i2zx.ttf?t=1642475459700') format('truetype');
}

.ti-icon {
  font-family: "ti-icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-list:before {
  content: "\e655";
}

.icon-github:before {
  content: "\e673";
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
