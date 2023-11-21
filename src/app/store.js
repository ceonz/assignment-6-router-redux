import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from '../features/imagesSlice';

export default configureStore({
  reducer: {
    images: imagesReducer
  }
});