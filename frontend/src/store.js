import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slice/apiSlice";
import weatherReducer from "./slice/weatherSlice";
import todosReducer from "./slice/todosSlice";
import productReducer from "./slice/productSlice";

const store = configureStore({
    reducer: {
        weatherData: weatherReducer,
        todosData: todosReducer,
        productData: productReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store;