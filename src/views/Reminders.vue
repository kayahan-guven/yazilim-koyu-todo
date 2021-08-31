<template>
  <div class="container">
    <div class="left-block">
      <search-box></search-box>
      <div v-for="widget in widgets" :key="widget" class="widget-container">
        <widgets :data="widget"></widgets>
      </div>
      <div class="my-list-container">
        <search-box @setSearch="setFilterName"></search-box>
        <div v-for="(list,index) in myList" :key="list">
          <my-list
              :data="list"
              :index="index"
              @setCurrentList="setCurrentList"></my-list>
        </div>
      </div>
      <add-list></add-list>
    </div>
    <div class="right-block">
        <div v-if="!myList.length">No reminders!</div>
        <div v-else>
            {{ myList[currentListIndex].name }}:
            <font-awesome-icon
                icon="plus-circle"
                class="icon"
                @click="addNewItemToList"/>
            <div v-for="(item, index) in myList[currentListIndex].items" :key="item">
                <list-item
                    :data="item"
                    :list-index="currentListIndex"
                    :index="index"
                ></list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SearchBox from "./../components/SearchBox"
import Widgets from "./../components/Widgets"
import MyList from "./../components/MyList"
import AddList from "./../components/AddList"
import ListItem from "@/components/ListItem";

export default {
  components: {
      ListItem,
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
        currentListIndex: 0,
        todayList: [],
        scheduledList: [],
        currentList: [],
        currentHeader: ''
    }
  },

  computed: {
      ...mapGetters({
        myList: 'getFilteredList'
      })
  },

  methods: {
      ...mapActions([
        'setFilterNameForList',
          'addListItem'
      ]),

      setFilterName ({ target }) {
        this.setFilterNameForList(target.value);
      },

      setCurrentList (index) {
          console.log(index);
          this.currentListIndex = index;
      },

      addNewItemToList () {
          this.addListItem(this.currentListIndex);
          this.pushToList(this.myList[this.currentListIndex].items.slice(-1)[0])
      },

      isItemDueToday (date) {
          const today = new Date().toDateString();
          return date === today;
      },

      pushToList (item) {
          console.log(item);
          this.isItemDueToday(item.endDate)
              ? this.todayList.push(item)
              : this.scheduledList.push(item);
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
    overflow: scroll;
  }

  .right-block {
    display: flex;
    justify-content: left;
  }
</style>
