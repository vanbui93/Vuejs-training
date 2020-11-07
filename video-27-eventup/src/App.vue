<template>
  <div id="app">
    <button v-on:click="title='Sự kiện Props Down -> Cha truyền vào con, con chỉ được sử dụng ko được phép thay đổi'">Thay đổi title từ component App.vue</button>
    <comp-header
      v-bind:titleHeader="title"
      v-on:propsChangeTitle="handeChangeTitle"/>
    <list-user v-bind:listUser="listUser"/>
    <comp-footer/>   
  </div>
</template>

<script>
import CompHeader from './components/CompHeader'
import CompFooter from './components/CompFooter'
import ListUser from './components/ListUser'

export default {
  name: 'App',
  data() {
    return {
      title: "Hello props - đã truyền thành công",
      listUser : [
        { id: 1, email:'test01@gmail.com', isActive: false },
        { id: 2, email:'test02@gmail.com', isActive: true },
        { id: 3, email:'test03@gmail.com', isActive: false },
        { id: 4, email:'test04@gmail.com', isActive: true },
        { id: 5, email:'test05@gmail.com', isActive: false },
        { id: 6, email:'test06@gmail.com', isActive: true }
      ]
    }
  },
  methods: {
    handeChangeTitle(data) {
      this.title = data.title;
      console.log('handeChangeTitle',data);
    }
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
