import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: "",
    monto: 0
}

const compraSlice = createSlice({
    name: "compra",
    initialState,
    reducers: {
        setCompras: (state, action) =>{
            state.id = action.payload;
            state.name = action.payload;
        }
    }
})


export const { setCompras } = compraSlice.actions;

export const selectCompraId = (state) => state.compra.id
export const selectCompraMonto = (state) => state.compra

export default compraSlice.reducer;