import { createSlice } from '@reduxjs/toolkit';

interface dataState {
    pickedSlideElement: number;
}

const initialState: dataState = {
    pickedSlideElement: 1,
};


const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.pickedSlideElement += 1;
    },
    decrement: (state) => {
      state.pickedSlideElement -= 1;
    },
    setPickedSlideElement: (state, action) => {
        state.pickedSlideElement = action.payload;
    },
  },
});

export const { increment, decrement, setPickedSlideElement } = dataSlice.actions;
export default dataSlice.reducer;
