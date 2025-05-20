import React, { useEffect, useState } from 'react';
import { Rate, Input, Button, Flex } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../redux/slices/reviewSlice';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  averageRating: number | string; // Allow string for 'N/A'
}

const ReviewPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const location = useLocation();
  const { title, author } = location.state || {};
  const navigate = useNavigate();

  // Get book data from Redux store
  const book = useSelector((state: RootState) =>
    state.books.books.find((b: Book) => b.id === id)
  );

  // Get existing review from Redux store
  const existingReview = useSelector((state: any) =>
    state.review.reviews.find((r: any) => r.bookId === id)
  );

  useEffect(() => {
    if (existingReview) {
      setRating(existingReview.rating);
      setReview(existingReview.review);
    }
  }, [existingReview]);

  console.log('Book:', book);
  console.log('Existing Review:', existingReview);

  const submitReview = () => {
    dispatch(addReview({ bookId: id, rating, review }));
    alert('Review submitted');
    navigate('/books');
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1>Review Book</h1>
      <h2>Title: {title ?? 'Unknown title'}</h2>
      <h2>Author: {author ?? 'Unkown author'}</h2>
      {book?.averageRating &&
      book.averageRating !== 0 &&
      existingReview === undefined ? (
        <Rate
          defaultValue={parseFloat(book.averageRating.toString())}
          allowHalf
          onChange={setRating}
        />
      ) : (
        <Rate value={rating} onChange={setRating} />
      )}
      <Input.TextArea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows={5}
        placeholder='Write your review...'
        style={{ marginTop: 20 }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button type='primary' onClick={submitReview} style={{ marginTop: 10 }}>
          Submit
        </Button>
        <Button onClick={() => navigate('/books')}>Cancel</Button>
      </div>
    </div>
  );
};

export default ReviewPage;
