<template>
  <div class="col-4">
      <p class="user">
          {{users.email}}
      </p>
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
.user {
    height: 150px;
    border: 1px solid #cccccc;
    margin-bottom: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
}
</style>