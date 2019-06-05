<template>
    <div id="calendar-week" class="container">
        <div class="columns is-mobile">
            <CalendarDay
                    v-for="day in state.days"
                    :key="day.id"
                    :day="day"
            />
        </div>
    </div>
</template>

<script>
    import CalendarDay from './CalendarDay.vue'
    import store from '../store'

    export default {
        name: "CalendarWeek",

        components: {
            CalendarDay
        },

        data() {
            return {
                state: store.state
            }
        }
    }
</script>

<style lang="scss" scoped>

    #calendar-week {
        margin-bottom: 50px;
        .column {
            padding: 0 0 0 0;
        }
    }
</style>