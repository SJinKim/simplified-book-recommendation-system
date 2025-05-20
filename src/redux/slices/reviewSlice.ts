import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Review {
  bookId: any;
  rating: number;
  review: string;
}

interface ReviewState {
  reviews: Review[];
}

const initialState: ReviewState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      const existingIndex = state.reviews.findIndex(
        (r) => r.bookId === action.payload.bookId
      );
      if (existingIndex !== -1) {
        // update changed fields
        const existing = state.reviews[existingIndex];
        existing.rating = action.payload.rating;
        existing.review = action.payload.review;
      } else {
        // Add new
        state.reviews.push(action.payload);
      }
    },
  },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
