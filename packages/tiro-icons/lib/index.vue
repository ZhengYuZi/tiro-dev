<template>
  <span
    :class="['ti-icon', name]"
    :style="{ fontSize: size + 'px', color: color }"
  ></span>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String
  },
  size: {
    type: Number
  },
  color: {
    type: String
  }
})
</script>

<style scoped>
@font-face {
  font-family: 'ti-icon'; /* Project id 2623434 */
  src: url('//at.alicdn.com/t/font_2623434_vlhv5a7prgs.woff2?t=1644548320667')
      format('woff2'),
    url('//at.alicdn.com/t/font_2623434_vlhv5a7prgs.woff?t=1644548320667')
      format('woff'),
    url('//at.alicdn.com/t/font_2623434_vlhv5a7prgs.ttf?t=1644548320667')
      format('truetype');
}

.ti-icon {
  font-family: 'ti-icon' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-sun:before {
  content: '\e607';
}

.icon-moon:before {
  content: '\e608';
}

.icon-list:before {
  content: '\e655';
}

.icon-github:before {
  content: '\e673';
}

.icon-code:before {
  content: '\e606';
}

.icon-copy:before {
  content: '\e62b';
}

.icon-eye:before {
  content: '\e8bf';
}

.icon-delete:before {
  content: '\e785';
}

.icon-arrow-right:before {
  content: '\e616';
}

.icon-arrow-left:before {
  content: '\e617';
}

.icon-drop-down:before {
  content: '\e632';
}

.icon-search:before {
  content: '\e78b';
}
</style>
