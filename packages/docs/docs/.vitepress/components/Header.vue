<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-logo">
        <a href="/">
          <img
            src="https://element-plus.gitee.io/images/element-plus-logo.svg"
          />
        </a>
      </div>
      <div class="navbar-content">
        <a></a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-navbar);
  width: 100%;
  background-color: var(--c-bg);
  height: var(--header-height);
  line-height: var(--header-height);
  border-bottom: 1px solid var(--c-border);

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 50px;
    .navbar-logo {
      height: 60%;

      img {
        width: auto;
        height: 100%;
      }
    }
  }
}
</style>
