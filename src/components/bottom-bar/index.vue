<template>
  <div>
    <div class="fixed bottom-0 left-0 right-0 z-10">
      <slot></slot>
      <div class="safe-bottom"></div>
    </div>
    <div :style="{height: `${barHeight}rpx`}"></div>
    <div class="safe-bottom"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    barHeight: {
      type: Number,
      default: 98
    },
    isTabPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('device', ['isIponeX']),
  }
}
</script>

<style>
.safe-bottom{
  height: calc(env(safe-area-inset-bottom) / 2);
}
</style>