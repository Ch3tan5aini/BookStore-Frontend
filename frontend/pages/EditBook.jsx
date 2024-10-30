import React from 'react'
import axios from 'axios';
import BackButoon from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const EditBook = () => {
  const [Loading, setLoading] = useState(false);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [publishYear, setPublishYear] = useState(Number);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`)
      .then((Response) => {
        setAuthor(Response.data.book.author);
        setTitle(Response.data.book.title);
        setPublishYear(Response.data.book.publishYear)
        setLoading(false);
      }).catch(error => {
        console.log(error);
        setLoading(false)
      })
  }, [])

  function handleEditBook() {
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true);
    axios.patch(`http://localhost:3000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/")
      }).catch(error => {
        console.log(error);
        setLoading(false)
      })
  }
  return (
    <div className='p-4'>
      <BackButoon />
      <h1 className="text-3xl my-4 text-center">Edit Book</h1>
      {Loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 rounded-xl w-1/3 p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-gray-500 border-2 px-4 py-2 w-full'
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-gray-500 border-2 px-4 py-2 w-full'
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-gray-500 border-2 px-4 py-2 w-full'
          />
        </div>
        <div className="my-4">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleEditBook}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditBook
