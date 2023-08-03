import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weatherData : [],
}


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        setData: (state, action)=>{
            state.weatherData = action.payload
        }
    }
})

export const {setData} = weatherSlice.actions
export default weatherSlice.reducer;