<template>
  <div class="container">
      <div class="row list-user">
        <user 
            v-for="users in listUser"
            v-bind:key="users.id"
            v-bind:users="users"
            v-on:propsListDelete="handleDeleteUser"
        />
    </div>
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
    },
    methods: {
        handleDeleteUser(id){
            this.$emit('deleteUserEvent',id);
        }
    },
}
</script>

<style>

</style>