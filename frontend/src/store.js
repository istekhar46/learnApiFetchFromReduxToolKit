import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slice/weatherSlice";
import { apiSlice } from "./slice/apiSlice";
import todosReducer from "./slice/todosSlice";

const store = configureStore({
    reducer: {
        weatherData: weatherReducer,
        todosData: todosReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store;