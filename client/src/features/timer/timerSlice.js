import { createSlice } from '@reduxjs/toolkit';

const initialTime = 1

export const timerSlice =  createSlice({
    name: 'timer',
    initialState: {
        value: {
            minutes: initialTime,
            seconds: 0,
            percentage: 0
        }
    },
    reducers: {
        tick: state => {
         if(state.value.seconds > 0 && state.value.minutes > 0) {
            state.value.seconds -= 1
            state.value.percentage = Math.round(100 - ( (( state.value.minutes * 60) + state.value.seconds) / ( initialTime * 60) ) * 100);
         } else if (state.value.seconds > 0 && state.value.minutes === 0  ) {
            state.value.seconds -= 1
            state.value.percentage = Math.round(100 - ( (( state.value.minutes * 60) + state.value.seconds) / ( initialTime * 60) ) * 100);
        } else if (state.value.seconds === 0 && state.value.minutes > 0 ) {
            state.value.seconds = 59
            state.value.minutes -= 1
            state.value.percentage = Math.round(100 - ( (( state.value.minutes * 60) + state.value.seconds) / ( initialTime * 60) ) * 100);

        } else {
            state.value.seconds = 0
            state.value.minutes = initialTime
            state.value.percentage = 0

        }
        }
    }
})

export const { tick } = timerSlice.actions;

export const selectSeconds = state => state.timer.value.seconds;
export const selectMinutes = state => state.timer.value.minutes;
export const selectPercentage = state => state.timer.value.percentage;

export default timerSlice.reducer