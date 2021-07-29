import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    documento: "",
    nombre: "",
    email: "",
    celular: "",
    saldo: 0
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.documento = action.payload.documento;
            state.nombre = action.payload.nombre;
            state.email = action.payload.email;
            state.celular = action.payload.celular;
            
        },
        setSignOut: (state) =>{
            state.documento= null;
            state.nombre= null;
            state.email= null;
            state.celular= null;
        }
    }
})


export const {setUserLogin, setSignOut} = userSlice.actions;

export const selectUserDocumento = (state) => state.user.documento
export const selectUserNombre = (state) => state.user.nombre
export const selectUserEmail = (state) => state.user.email
export const selectUserCelular = (state) => state.user.celular
export const selectUserSaldo = (state) => state.user.saldo

export default userSlice.reducer;