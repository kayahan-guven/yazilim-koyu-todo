<template>
  <div class="block">
    <font-awesome-icon :icon="data.icon" class="icon" />
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

  data () {
    return {}
  }
}
</script>

<style scoped>
    .block {
      position: relative;
    }

    .value {
      position: absolute;
      margin-top: -48px;
      right: 0;
    }

    .text {
      padding-top: 11px;
    }
</style>
