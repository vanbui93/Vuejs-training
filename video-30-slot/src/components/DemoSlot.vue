<template>
  <div class="demo-slot">
      <h1>Demo Slot</h1>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'demoSlot',
    data(){
        return {

        }
    },
    methods: {
        handleClickInputFile(e){
            this.$refs.fileInputAvatar.click()
        }
    },
}
</script>

<style>
.demo-slot {
    margin-top: 100px;
    padding:100px 30px;
    border: 1px solid #bbbbbb;
}
</style>