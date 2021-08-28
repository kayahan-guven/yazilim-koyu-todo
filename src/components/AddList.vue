<template>
  <div class="add-list-block">
    <font-awesome-icon icon="plus-circle" class="icon"/>
    <div @click="addList" class="cur-pointer">Add List</div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
      methods: {
          ...mapActions([
            'addList'
          ]),
      }
  }
</script>

<style scoped>
    .add-list-block {
      display: flex;
    }

    .icon {
      margin-right: 10px;
    }
</style>
