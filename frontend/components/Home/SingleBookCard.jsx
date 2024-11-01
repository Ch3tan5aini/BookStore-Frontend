import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosInformationCircle } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import BookModel from './BookModel';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";


const SingleBookCard = ({ book }) => {
    const [showModel, setShowModel] = useState(false);
    return (
        <div>
            <div key={book._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
                <h2 className="absolute top-1 right-2 px-4 py-1 bg-gray-400 rounded-md">
                    {book.publishYear}
                </h2>
                <h4 className="my-2 text-xs text-gray-500">{book._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <MdOutlineLibraryBooks />
                    <h2 className="my-1">{book.title}</h2>
                </div>
                <div className="flex items-center justify-start gap-x-2">
                    <FaRegUser />
                    <h2 className="my-1">{book.author}</h2>
                </div>
                <div className="flex items-center justify-between gap-x-2 mt-4 p-4">
                    <FaEye className="text-3xl text-blue-800 hover:text-black cursor-pointer" onClick={() => setShowModel(true)} />
                    <Link to={`/books/details/${book._id}`}>
                        <IoIosInformationCircle className='text-2xl text-green-800 hover:text-black' />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                        <MdEditDocument className='text-2xl text-yellow-600 hover:text-black' />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                        <MdDelete className='text-2xl text-red-600 hover:text-black' />
                    </Link>
                </div>
                {showModel && (<BookModel books={book} onClose={() => setShowModel(false)} />)}
            </div>
        </div>
    )
}

export default SingleBookCard
