import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/User/userSlice';
import compraSlice from '../features/Compra/compraSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    compra: compraSlice
  },
});
