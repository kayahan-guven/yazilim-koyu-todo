<template>
  <div class="block">
    <font-awesome-icon icon="list" class="icon"/>
    <div class="text">{{ data.text }}</div>
    <div class="value">{{ data.value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },

  data() {
    return {}
  }
}
</script>

<style scoped>
  .block {
    display: flex;
    position: relative;
    margin-top: 15px;
  }

  svg {
    margin-right: 10px;
  }

  .value {
    position: absolute;
    right: 18px;
  }
</style>
