import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from './slices/reviewSlice';
import booksReducer from './slices/booksSlice';

export const store = configureStore({
  reducer: {
    review: reviewReducer,
    books: booksReducer,
  },
});

//get the return type of the function as RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
