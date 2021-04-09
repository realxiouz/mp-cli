<template>
  <div>
    <div>
      dev
    </div>
    <empty />
    <bottom-bar>
      <div class="bg-red-500">底部bar</div>
    </bottom-bar>
  </div>
</template>

<script>
import BottomBar from '@/components/bottom-bar'
import Empty from '@/components/empty'
export default {
  components: {
    BottomBar,
    Empty
  }
}
</script>

<style>

</style>