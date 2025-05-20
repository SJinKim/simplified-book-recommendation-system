import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BookListPage from './pages/BookListPage';
import ReviewPage from './pages/ReviewPage';
import { ProtectedRoute } from './routes/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route
          path='/books'
          element={
            <ProtectedRoute>
              <BookListPage />
            </ProtectedRoute>
          }
        />
        <Route path='/review/:id' element={<ReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
