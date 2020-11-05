<template>
  <div class="user">
      <p>{{users.email}}</p>
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
    }
}
</script>

<style>

</style>