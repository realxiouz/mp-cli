<template>
  <div>
    <div class="mx-auto w-80 bg-red-500" @click="showModal">
      modal
    </div>
    <empty />
    <bottom-bar>
      <div class="bg-red-500">底部bar</div>
    </bottom-bar>
    <modal :show.sync="show">
      <div class="bg-red-200 h-12"></div>
    </modal>
  </div>
</template>

<script>
import BottomBar from '@/components/bottom-bar'
import Empty from '@/components/empty'
import Modal from '@/components/modal'

export default {
  components: {
    BottomBar,
    Empty,
    Modal,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showModal() {
      this.show = true
    }
  }
}
</script>

<style>

</style>