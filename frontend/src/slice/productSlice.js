import { createSlice } from "@reduxjs/toolkit";

const intitialState = {
    products: null
}

const productSlice = createSlice({
    name: 'product',
    initialState: intitialState,
    reducers:{
        setProducts(state, action){
            state.products = action.payload;
        }
    }
})

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;