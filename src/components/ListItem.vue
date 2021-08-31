<template>
    <div class="block">
        <div class="item-container">
            <font-awesome-icon icon="list-ol" class="icon"/>
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
                    icon="edit"
                    class="icon"
                    @click="saveChangedName"/>
            </div>
            <div>
                <font-awesome-icon
                    icon="info-circle"
                    class="info-icon"/>
                <font-awesome-icon
                    icon="calendar-day"
                    class="date-icon"
                    @click="showDate"/>
                <div v-if="dateVisible">
                    <input
                        name="date"
                        class="date"
                        v-model="newEndDate">
                    <font-awesome-icon
                        icon="check-circle"
                        class="check-icon"
                        />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        data: {
            type: Object
        },
        listIndex: {
            type: Number,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
    },

    data() {
        return {
            canEdit: false,
            newItemName: '',
            newEndDate: this.data.endDate,
            dateVisible: false
        }
    },

    methods: {
        ...mapActions([
            'changeListItemName',
            'saveChangedName'
        ]),

        editName () {
            this.canEdit = true;
        },

        saveChangedName () {
            this.changeListItemName({ index: this.index, listIndex: this.listIndex, itemName: this.newItemName });
            this.canEdit = false;
        },

        showDate () {
            this.dateVisible = !this.dateVisible;
        }
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

.item-container {
    display: flex;
    align-items: start;
}

.new-item {
    margin-right: 10px;
    width: 125px;
}

.info-icon {
    margin-left: 10px;
}

.date-icon {
    margin-left: 3px;
}
</style>
