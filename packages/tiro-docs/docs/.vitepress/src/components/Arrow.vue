<template>
  <div class="arrow-container" v-if="data?.length">
    <div class="arrow-inner">
      <a
        class="arrow-box arrow-left"
        v-if="previous"
        @click="LinkTo(previous.link)"
      >
        <ti-icon name="icon-arrow-left" />
        <div class="arrow-info">
          <span>PREVIOUS</span>
          <span class="arrow-title">{{ previous?.text }}</span>
        </div>
      </a>
    </div>
    <div class="arrow-inner">
      <a class="arrow-box arrow-right" v-if="next" @click="LinkTo(next.link)">
        <ti-icon name="icon-arrow-right" />
        <div class="arrow-info">
          <span>NEXT</span>
          <span class="arrow-title">{{ next?.text }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUpdated } from "vue"
import { useRouter } from "vitepress"
const router = useRouter()

const suffix = ".html"
const previous = ref()
const next = ref()

const props = defineProps({
  data: {
    type: Array,
  },
  path: {
    type: String,
  },
})

onUpdated(() => {
  if (!props.data?.length) {
    previous.value = null
    next.value = null
    return
  }
  const children = props.data.reduce((total, item) => {
    total.push(...item.children)
    return total
  }, [])
  for (let index = 0; index < children.length; index++) {
    if (children[index].link + suffix === props.path) {
      previous.value = children[index - 1]
      next.value = children[index + 1]
      break
    }
  }
})

const LinkTo = (url, suff = suffix) => {
  router.go(url + suff)
}
</script>

<style lang="scss" scoped>
.arrow-container {
  width: 100%;
  margin-top: 30px;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;

  .arrow-inner {
    width: 30%;
  }

  .arrow-box {
    width: 100%;
    padding: 20px 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: var(--c-text-light-1);

    &:hover {
      background-color: var(--c-white-dark);

      .arrow-info {
        .arrow-title {
          color: #3370ff;
          text-decoration: underline;
        }
      }
    }

    .arrow-info {
      width: 100%;
      padding: 0 20px;

      span {
        font-size: 14px;
        line-height: 30px;
        display: block;
      }

      .arrow-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .arrow-right {
    flex-direction: row-reverse;

    .arrow-info {
      text-align: right;
    }
  }

  .arrow-left {
    .arrow-info {
      text-align: left;
    }
  }
}

@media (max-width: 720px) {
  .arrow-container {
    padding: 10px 0 !important;
    .arrow-inner {
      width: 50% !important;
      .arrow-box {
        padding: 0 !important;
      }
    }
  }
}

@media (max-width: 960px) {
  .arrow-container {
    padding: 20px 0 !important;
    .arrow-inner {
      width: 40% !important;
    }
  }
}
</style>
