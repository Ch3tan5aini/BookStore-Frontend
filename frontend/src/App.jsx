import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CreateBook from '../pages/CreateBook';
import DeleteBook from '../pages/DeleteBook';
import EditBook from '../pages/EditBook';
import ShowBook from '../pages/ShowBook';
import HomePage from '../pages/HomePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App

