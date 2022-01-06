<template>
  <aside class="sidebar">
    <div class="sidebar-groups">
      <section v-for="title in data" :key="title">
        <p>{{ title.text }}</p>
        <ul>
          <li v-for="item in title.children" :key="item">
            {{ item.text }}
          </li>
        </ul>
      </section>
    </div>
  </aside>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
  },
})
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-sidebar);
  border-right: 1px solid var(--c-divider);
  width: 15rem;
  background-color: var(--c-bg);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  
  .sidebar-groups {
    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
}
@media (min-width: 720px) {
  .sidebar {
    transform: translateX(0);
  }
}
@media (min-width: 960px) {
  .sidebar {
    width: 17rem;
  }
}
.sidebar.open {
  transform: translateX(0);
}
</style>
