<template>
  <div>
    <div class="fixed w-full h-full left-0 top-0 z-10" v-if="show" @click="onOutter"></div>
    <div v-if="!isBottom">

    </div>
    <div v-else :class="{show}" class="absolute left-0 right-0 bottom-wrap z-50">
      <slot></slot>
      <div class="safe-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isBottom: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false,
    },
    clickOut: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onOutter() {
      this.clickOut && this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="less">
.bottom-wrap{
  bottom: -100%;
  transition: all 1s;
  &.show{
    bottom: 0;
  };
}
.safe-bottom{
  height: calc(env(safe-area-inset-bottom) / 2);
}
</style>