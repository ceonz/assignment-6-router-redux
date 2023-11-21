import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    catImages: [], 
    currentImageIndex: 0,
    favorites: [],
  },
  reducers: {
    incrementImageIndex: state => {
      state.currentImageIndex = (state.currentImageIndex + 1)% state.catImages.length;
    },
    addFavorite: state => {
      state.favorites.push(action.payload);
    },
  }
});

export const { incrementImageIndex, addFavorite } = imagesSlice.actions;

export default imagesSlice.reducer;