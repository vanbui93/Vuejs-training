<template>
  <div id="app">
    <comp-header/>
     <list-user/>
    <comp-footer/>   
  </div>
</template>

<script>
import CompHeader from './components/CompHeader'
import CompFooter from './components/CompFooter'
import ListUser from './components/ListUser'

export default {
  name: 'App',
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
