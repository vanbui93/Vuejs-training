<template>
  <div id="app">
    <demo-slot>
      <h1>Nội dung slot từ component cha</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui in enim at velit. Maxime ea amet iure rerum, corporis quibusdam minima, vero itaque praesentium et architecto excepturi, culpa nulla. Quos.</p>
    </demo-slot>
  </div>
</template>

<script>
import DemoSlot from './components/DemoSlot'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    DemoSlot
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
