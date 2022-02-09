<template>
  <nav class="toc-content">
    <ul class="toc-items">
      <li
        class="toc-item"
        :class="index === activeIndex ? 'active' : ''"
        v-for="(item, index) in headers"
        :style="`padding-left:${(item.level - 2) * 10}px`"
      >
        <a class="toc-link" :href="`#${item.title.toLowerCase()}`">{{
          item.title
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import useActiveLink from "../hooks/active-link.js"

const props = defineProps({
  headers: {
    type: Array,
  },
})

const activeIndex = ref()

useActiveLink(activeIndex)
</script>

<style lang="scss">
.toc-content {
  padding: 0px 10px;
  position: sticky;
  top: 150px;
  right: 70px;
  font-size: 13px;
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .toc-items {
    margin-top: 10px;
    .toc-item {
      a {
        color: var(--c-text-light-3);
      }
      &.active {
        a {
          color: var(--c-active);
        }
      }
    }
  }
}
</style>
