<template>
  <div class="col-4">
      <div class="user">
          <p>{{users.email}}</p>
          <button class="delete" v-on:click="handleDelete">Delete</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'user',
    props: {
        users: {
            type: Object,
            default: null
        }
    },
    data() {
        return {

        }
    },
    methods: {
        handleDelete (){
            const id = this.users.id;
            this.$emit('propsListDelete', id);
            console.log('handleDelete');
        }
    },
}
</script>

<style>
.user {
    height: 150px;
    border: 1px solid #cccccc;
    margin-bottom: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
}
.user button {
    position: absolute;
    top: 0;
    right: 0;
}
</style>