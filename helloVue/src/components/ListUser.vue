<template>
  <div class="list-user">
      <user 
        v-for="users in listUser"
        v-bind:key="users.id"
        v-bind:users="users"
      />
  </div>
</template>

<script>
import User from './User'
export default {
    name: 'list-user',
    props: {
        listUser: {
            type: Array,
            default: []
        }
    },
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