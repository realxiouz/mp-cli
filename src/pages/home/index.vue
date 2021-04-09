<template>
  <div>
    <div class="mt-2 flex h-10  px-4 w-1--2 rounded-sm box-border mx-auto bg-red-500 shadow-lg">
      <div class="absolute"></div>
      <div class="relative"></div>
    </div>
    <div class="mt-3 bg-green-500 mx-3 shadow rounded-lg h-24 p-3 box-border"></div>
    <div class="mt-2 bg-yellow-500 flex-center h-20">呵呵</div>
    <button hover-class="bg-yellow-500" class="w-60 mx-auto mt-2 bg-red-500 flex-center h-20 border-none rounded-none">btn</button>
    <div
      class="fixed left-0 w-screen  h-12 bottom-1 rounded-full shadow-lg text-white flex items-center justify-center hover:bg-red-500"
      @click="$go(`/pages-sub/dev/index`)"
    >dev</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>