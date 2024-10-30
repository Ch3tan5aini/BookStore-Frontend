import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const DeleteBook = () => {
  const [Loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDeleteBook() {
    setLoading(true);
    axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false)
        navigate("/")
      }).catch(error => {
        console.log(error);
        setLoading(true);
      })
  }


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Delete Book</h1>
      {Loading ? <Spinner /> : ''}
      <div className="flex flex-col item-center border-2 rounded-xl w-1/3 p-8 mx-auto">
        <h2 className='text-2xl text-center'>Are You Sure? You Want To This Book.</h2>
        <button className="p-4 bg-red-600 text-white mt-8 w-full" onClick={handleDeleteBook}>Delete Book</button>
      </div>
    </div>
  )
}

export default DeleteBook
