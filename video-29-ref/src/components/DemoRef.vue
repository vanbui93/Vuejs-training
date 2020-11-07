<template>
  <div class="demo-ref">
      <h1>Demo Ref</h1>
      <button class="avatar" v-on:click="handleClickInputFile">Thay đổi Avatar</button>
      <input 
        type="file" 
        style="display:none"
        ref="fileInputAvatar">
  </div>
</template>

<script>
export default {
    name: 'demoRef',
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
.demo-ref {
    margin-top: 100px;
    padding:100px 30px;
    border: 1px solid #bbbbbb;
}
.avatar {
    border: 2px solid #cccccc;
    padding: 12px 15px;
    background:pink;
    border-radius: 5px;
    color: #eb5114;
    transition: all .3s ease;
}
.avatar:hover{
    cursor: pointer;
}
</style>