import { seedData } from './seed';

const store = {
    state: {
        days: seedData
    },
    
    getActiveDay() {
        return this.state.days.find(day => day.active === true)
    },
    
    setActiveDay(dayId) {
        this.state.days.forEach(day => {
            day.active = day.id === dayId;
        })
    },
    
    submitEvent(details) {
        const activeDay = this.getActiveDay();
    
        activeDay.events.push({ details, edit: false });
    }
};

export default store;