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
                items: [],
                information: ''
            });
        },

        setFilterNameForList (state, listName) {
            state.filterNameForList = listName;
        },

        changeItemName (state, { index, listName}) {
            state.lists[index].name = listName;
        }
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
