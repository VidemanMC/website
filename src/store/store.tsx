import { configureStore } from '@reduxjs/toolkit';
import dataSliceReducer from './slice';
const store = configureStore({
  reducer: {
    pickedSlideElement: dataSliceReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
