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
    },
    
    editEvent(dayId, eventIndex) {
        const day = this.state.days.find(day => day.id === dayId);
        
        const event = day.events[eventIndex];
    
        event.edit = true;
    },
    
    updateEvent(dayId, eventIndex, newEventDetails) {
        const day = this.state.days.find(day => day.id === dayId);
    
        const event = day.events[eventIndex];
    
        event.details = newEventDetails;
        event.edit = false;
    },
    
    deleteEvent(dayId, eventIndex) {
        const day = this.state.days.find(day => day.id === dayId);
        
        day.events.splice(eventIndex, 1);
    }
};

export default store;