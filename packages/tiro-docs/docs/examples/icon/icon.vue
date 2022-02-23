<template>
  <div class="icon-demo">
    <div
      v-for="item in icons"
      :key="item.code"
      class="icon-demo-item"
      :data-content-before="dataContentBefore"
      @click="copy(item.code)"
      @mouseleave="changeContent"
    >
      <ti-icon :name="item.code" :size="30"></ti-icon>
      <span>{{ item.name }}</span>
      <span>{{ item.code }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()

const icons = [
  { name: '列表', code: 'icon-list' },
  { name: 'github', code: 'icon-github' },
  { name: '代码', code: 'icon-code' },
  { name: '复制', code: 'icon-copy' },
  { name: '眼睛', code: 'icon-eye' },
  { name: '删除', code: 'icon-delete' },
  { name: '箭头右', code: 'icon-arrow-right' },
  { name: '箭头左', code: 'icon-arrow-left' },
  { name: '下拉', code: 'icon-drop-down' },
  { name: '搜索', code: 'icon-search' },
  { name: '月亮', code: 'icon-moon' },
  { name: '太阳', code: 'icon-sun' }
]
const dataContentBefore = ref('点击复制')
const copy = async (Msg) => {
  try {
    await toClipboard(Msg)
    dataContentBefore.value = '复制成功'
  } catch (e) {
    console.error(e)
    dataContentBefore.value = '复制失败'
  }
}
const changeContent = () => {
  dataContentBefore.value = '点击复制'
}
</script>

<style lang="scss" scoped>
.icon-demo {
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  .icon-demo-item {
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    &:hover {
      &:before {
        content: attr(data-content-before);
        color: #fff;
        font-size: 16px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: inherit;
        background-color: var(--c-text-light-2);
        opacity: 0.6;
      }
    }
  }
}
</style>
