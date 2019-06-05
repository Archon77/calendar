<template>
    <div class="day-event" :style="getEventBackgroundColor">
        <div v-if="!event.edit">
            <span class="has-text-centered details">{{ event.details }}</span>
            <div class="has-text-centered icons">
                <i class="fa fa-pencil-square edit-icon" @click="editEvent(day.id, index)"></i>
                <i class="fa fa-trash-o delete-icon" @click="deleteEvent(day.id, index)"></i>
            </div>
        </div>

        <div v-if="event.edit">
            <input type="text"
                   :placeholder="event.details"
                   v-model="newEventDetails"
                   autofocus
            >
            <div class="has-text-centered icons">
                <i class="fa fa-check" @click="updateEvent(day.id, index, newEventDetails)"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store'

    export default {
        name: "CalendarEvent",

        props: ['event', 'day', 'index'],

        data() {
            return {
                newEventDetails: ''
            }
        },

        computed: {
            getEventBackgroundColor() {
                const colors = ['#FF9999','#85d6ff','#99ff99'];

                let randomColor = colors[Math.floor(Math.random() * colors.length)];

                return `background-color: ${randomColor}`;
            }
        },

        methods: {
            editEvent(dayId, eventIndex) {
                store.editEvent(dayId, eventIndex);
            },

            updateEvent(dayId, eventIndex, newEventDetails) {
                if(newEventDetails !== '')
                    store.updateEvent(dayId, eventIndex, newEventDetails);
                else
                    store.deleteEvent(dayId, eventIndex);

                this.newEventDetails = '';
            },

            deleteEvent(dayId, eventIndex) {
                store.deleteEvent(dayId, eventIndex);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>