import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    catImages: [], 
    currentImageIndex: 0,
  },
  reducers: {
    incrementImageIndex: state => {
      state.currentImageIndex = (state.currentImageIndex + 1)% state.catImages.length;
    },
  }
});

export const { incrementImageIndex } = imagesSlice.actions;

export default imagesSlice.reducer;