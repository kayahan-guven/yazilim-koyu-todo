<template>
  <div>
    <font-awesome-icon icon="search" class="search-icon" />
    <input type="text" placeholder="Search" @input="event => $emit('setSearch', event)"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({})
  }
}

</script>

<style scoped>
    .search-icon {
      position: absolute;
      margin-top: 7px;
      margin-left: 8px;
    }

    input {
      height: 25px;
      padding-left: 30px;
      margin-bottom: 30px;
      width: 79%;
      border-radius: 3px;
    }
</style>
