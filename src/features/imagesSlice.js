import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    catImages: [], 
    currentImageIndex: 0,
    favorites: [],
    votes: [],
  },
  reducers: {
    incrementImageIndex: state => {
      state.currentImageIndex = (state.currentImageIndex + 1)% state.catImages.length;
    },
    setCatImages: (state, action) => {
      state.catImages = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
    },

    castVote: (state, action) => {
      state.votes.push(action.payload);
    },


  }
});

export const { incrementImageIndex, setCatImages, addFavorite, removeFavorite, castVote } = imagesSlice.actions;

export default imagesSlice.reducer;