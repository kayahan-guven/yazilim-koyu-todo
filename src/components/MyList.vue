<template>
  <div class="block">
    <div class="item-list-container">
      <font-awesome-icon icon="list" class="icon"/>
      <div
          v-if="!canEdit"
          class="text cur-pointer"
          @click="editName">
          {{ data.name }}
      </div>
      <div v-else>
        <input
            name="type"
            class="new-item"
            v-model="newItemName">
        <font-awesome-icon
            icon="plus-circle"
            class="icon"
            @click="saveChangedName"/>
      </div>
    </div>
    <div class="value">{{ data.items.length }}</div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
      props: {
          data: {
            type: Object
          },
          index: {
            type: Number,
            required: true
          }
      },

      data() {
          return {
            canEdit: false,
            newItemName: ''
          }
      },

      methods: {
          ...mapActions([
              'changeItemName',
              'saveChangedName'
          ]),

          editName () {
              this.canEdit = true;
          },

          saveChangedName () {
                this.changeItemName({ index: this.index, listName: this.newItemName });
                this.canEdit = false;
          },
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

  .save-changed-name {
    width: 40px;
    height: 40px;
  }

  .item-list-container {
    display: flex;
    align-items: center;
  }

  .new-item {
    margin-right: 10px;
    width: 125px;
  }
</style>
