import { configureStore } from '@reduxjs/toolkit';
import dataSliceReducer from './slice';
const store = configureStore({
  reducer: {
    data: dataSliceReducer,
  },
});

export default store;
