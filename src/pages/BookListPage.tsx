import React from 'react';
import { Table, Input, Rate, Button } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setBooks } from '../redux/slices/booksSlice';

const BookListPage = () => {
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();
  const reviews = useSelector((state: RootState) => state.review.reviews);
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);

  // UseEffect runs ONCE (no [reviews] dependency!)
  useEffect(() => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction')
      .then((res) => {
        const items = res.data.items.map((item: any) => ({
          id: item.id,
          key: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors?.join(', ') ?? 'Unknown',
          genre: item.volumeInfo.categories?.[0] ?? 'Fiction',
          averageRating: item.volumeInfo.averageRating ?? 'N/A',
        }));
        dispatch(setBooks(items));
      });
  }, [dispatch]);

  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    // localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>Books</h1>
        <Button danger onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <Input.Search
        placeholder='Search by title or author'
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: 300, marginBottom: 20 }}
      />
      <Table
        dataSource={filtered}
        columns={[
          { title: 'Title', dataIndex: 'title' },
          { title: 'Author', dataIndex: 'author' },
          { title: 'Genre', dataIndex: 'genre' },
          {
            title: 'Rating',
            dataIndex: 'id',
            render: (id: string) => {
              const review = reviews.find((r) => r.bookId === id);
              const book = books.find((b) => b.id === id);
              const rating = review?.rating ?? book?.averageRating ?? 0;
              return rating !== 0 ? (
                <Rate disabled defaultValue={rating} allowHalf />
              ) : (
                'N/A'
              );
            },
          },
        ]}
        pagination={{
          pageSizeOptions: ['5', '10', '20'],
          defaultPageSize: 5,
          showSizeChanger: true,
        }}
        onRow={(record) => ({
          onDoubleClick: () => {
            navigate(`/review/${record.id}`, {
              state: {
                title: record.title,
                author: record.author,
                averageRating: record.averageRating,
              },
            });
          },
        })}
      />
    </>
  );
};

export default BookListPage;
