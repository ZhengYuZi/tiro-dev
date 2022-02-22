<template>
  <div class="icon-size-demo">
    <ti-icon name="icon-github" />
    <ti-icon name="icon-github" :size="20" />
    <ti-icon name="icon-github" :size="30" />
    <ti-icon name="icon-github" :size="40" />
  </div>
</template>

<style lang="scss" scoped>
.icon-size-demo {
  & > * {
    margin-right: 10px;
  }
}
</style>
