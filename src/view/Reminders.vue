<template>
  <div class="container">
    <div class="left-block">
      <search-box></search-box>
      <div v-for="widget in widgets" :key="widget" class="widget-container">
        <widgets :data="widget"></widgets>
      </div>
      <div class="my-list-container">
        <div v-for="list in myList" :key="list">
          <my-list :data="list"></my-list>
        </div>
      </div>
      <add-list></add-list>
    </div>
    <div class="right-block">
      No Reminders
    </div>
  </div>
</template>

<script>
import SearchBox from "./../components/SearchBox"
import Widgets from "./../components/Widgets"
import MyList from "./../components/MyList"
import AddList from "./../components/AddList"

export default {
  components: {
    SearchBox,
    Widgets,
    MyList,
    AddList
  },

  data () {
    return {
      widgets: [
        {
          icon: 'calendar',
          value: 1,
          text: 'Today'
        },
        {
          icon: 'calendar-day',
          value: 12,
          text: 'Scheduled'
        },
        {
          icon: 'home',
          value: 13,
          text: 'All'
        },
        {
          icon: 'flag',
          value: 0,
          text: 'Flag'
        }
      ],
      myList: [
        {
          value: 12,
          text: 'Reminders'
        },
        {
          value: 0,
          text: 'New List'
        },
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
    display: flex;
  }

  .left-block {
    flex: 0.5;
  }

  .right-block {
    flex: 1.5;
  }

  .left-block, .right-block {
    border: 1px solid black;
    padding: 12px;
  }


  .widget-container {
    width: 34%;
    display: inline-block;
    border: 1px solid #c3c3c3;
    padding: 13px;
    border-radius: 10px;
    margin-right: 5px;
    margin-bottom: 7px;
  }

  .my-list-container {
    height: 240px;
  }

  .right-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
