import { configureStore } from '@reduxjs/toolkit';
import dataSliceReducer from './slice';
const store = configureStore({
  reducer: {
    // место для редюсеров
    data: dataSliceReducer,
  },
});

export default store;
