import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosInformationCircle } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const BooksCard = ({ books }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {books.map((item) => (
                <div key={item._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
                    <h2 className="absolute top-1 right-2 px-4 py-1 bg-gray-400 rounded-md">
                        {item.publishYear}
                    </h2>
                    <h4 className="my-2 text-xs text-gray-500">{item._id}</h4>
                    <div className="flex justify-start items-center gap-x-2">
                        <MdOutlineLibraryBooks />
                        <h2 className="my-1">{item.title}</h2>
                    </div>
                    <div className="flex items-center justify-start gap-x-2">
                        <FaRegUser />
                        <h2 className="my-1">{item.author}</h2>
                    </div>
                    <div className="flex items-center justify-between gap-x-2 mt-4 p-4">
                        <Link to={`/books/details/${item._id}`}>
                            <IoIosInformationCircle className='text-2xl text-green-800 hover:text-black' />
                        </Link>
                        <Link to={`/books/edit/${item._id}`}>
                            <MdEditDocument className='text-2xl text-yellow-600 hover:text-black' />
                        </Link>
                        <Link to={`/books/delete/${item._id}`}>
                            <MdDelete className='text-2xl text-red-600 hover:text-black' />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BooksCard
