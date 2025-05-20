import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
  id: string;
  key: string;
  title: string;
  author: string;
  genre: string;
  averageRating: number;
}

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    updateBookRating: (
      state,
      action: PayloadAction<{ id: string; rating: number }>
    ) => {
      const book = state.books.find((b) => b.id === action.payload.id);
      if (book) {
        book.averageRating = action.payload.rating;
      }
    },
  },
});

export const { setBooks, updateBookRating } = booksSlice.actions;
export default booksSlice.reducer;
