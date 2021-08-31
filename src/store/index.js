import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        lists: [],
        filterNameForList: ''
    },

    mutations: {
        addList (state) {
            state.lists.push({
                name: 'Yeni Liste',
                description: '',
                items: [{
                    name: 'Yeni item',
                    note: '',
                    endDate: new Date().toDateString()
                }],
                information: ''
            });
        },

        setFilterNameForList (state, listName) {
            state.filterNameForList = listName;
        },

        changeItemName (state, { index, listName}) {
            state.lists[index].name = listName;
        },

        addListItem (state, index) {
            state.lists[index].items.push({
                name: 'Yeni item',
                note: '',
                endDate: new Date().toDateString()
            });
        },

        changeListItemName (state, { listIndex, index, itemName }) {
            state.lists[listIndex].items[index].name = itemName;
        },
    },

    actions: {
        addList ({ commit }) {
            commit('addList');
        },

        setFilterNameForList ({ commit }, listName) {
            commit('setFilterNameForList', listName);
        },

        changeItemName ({ commit }, payload) {
            commit('changeItemName', payload);
        },

        changeListItemName ({ commit }, payload) {
            commit('changeListItemName', payload);
        },

        addListItem ({ commit }, payload) {
            commit('addListItem', payload);
        }
    },

    getters: {
        getLists: state => state.lists,
        getFilteredList: state => {
            if (state.filterNameForList === '') {
                return state.lists;
            }

            return state.lists.filter(list => list.name.toLowerCase().includes(state.filterNameForList.toLowerCase()))
        }
    }
})
