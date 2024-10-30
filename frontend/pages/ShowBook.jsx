import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';


const ShowBook = () => {
  const [book, setbook] = useState({});
  const [Loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    axios.get(`http://localhost:3000/books/${id}`)
      .then(Response => {
        setbook(Response.data.book)
        setLoading(false)
        console.log(book)
      }).catch(error => {
        setLoading(true);
        console.log(error);
      })
  }, []);


  return (
    <div className='p-4'>
      <BackButton / >
      <h1 className='text-3xl my-4'>Book Details</h1>
      {
        Loading ? (
          <Spinner/>
        ) : (
          <div className="flex flex-col border-2 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Created At</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Updated At</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ShowBook
