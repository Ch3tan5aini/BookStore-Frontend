import React from 'react'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { IoIosCloseCircle } from "react-icons/io";
const BookModel = ({ books, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
            <div onClick={(event) => { event.stopPropagation }} className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative">
                <IoIosCloseCircle className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer" onClick={onClose} />
                <h2 className="w-fit px-4 py-1 bg-gray-400 rounded-md">
                    {books.publishYear}
                </h2>
                <h4 className="my-2 text-xs text-gray-500">{books._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <MdOutlineLibraryBooks />
                    <h2 className="my-1">{books.title}</h2>
                </div>
                <div className="flex items-center justify-start gap-x-2">
                    <FaRegUser />
                    <h2 className="my-1">{books.author}</h2>
                </div>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas incidunt reprehenderit itaque laudantium officiis asperiores cupiditate praesentium sunt dicta non ducimus, deserunt animi quos. Minus praesentium quae fugit quidem ut.</p>
            </div>
        </div>
    )
}

export default BookModel
