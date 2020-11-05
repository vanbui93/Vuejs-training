<template>
  <div class="list-user">
      <user/>
      <user/>
  </div>
</template>

<script>
import User from './User'
export default {
    name: 'list-user',
    data() {
        return {

        }
    },
    components : {
        User
    }
}
</script>

<style>

</style>