import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = dataSlice.actions;
export default dataSlice.reducer;
