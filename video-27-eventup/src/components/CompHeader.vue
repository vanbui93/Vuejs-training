<template>
  <header class="mb-5">
      <h2 class="mb-2">
        {{titleHeader}}
      </h2>
      <button v-on:click="changeTitleHeader">Thay đổi title từ CompHeader.vue</button>
  </header>
</template>

<script>
export default {
    name: 'comp-header',
    props: {
        titleHeader: String
    },
    data() {
        return {
            
        }
    },
    methods: {
        changeTitleHeader(e) {
            //Không được phép thay đổi trực tiếp props từ component cha
            //-> Kruyền sự kiện thông báo ra bên ngoài
            // -> Kích hoạt sự kiện 'propsChangeTitle' trong compHeader.vue
            //-> Sau kích hoạt, function propsChangeTitle ngoài file App.vue sẽ chạy

            this.$emit('propsChangeTitle');

            console.log('comp header: ', this.titleHeader);
        },
    },
}
</script>

<style>

</style>