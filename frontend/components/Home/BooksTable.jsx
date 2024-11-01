import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosInformationCircle } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
    return (
        <div>
            <table className='w-full border-seprate border-spacing-2'>
                <thead>
                    <tr>
                        <th className='border border-slate-600'>No</th>
                        <th className='border border-slate-600'>Title</th>
                        <th className='border border-slate-600 max-md:hidden'>Author</th>
                        <th className='border border-slate-600 max-md:hidden'>Publish Year</th>
                        <th className='border border-slate-600'>Operations</th>
                    </tr>
                </thead>
                {books.length > 0 ? (
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className="h-8">
                                <td className="border border-slate-700  text-center">
                                    {index + 1}
                                </td>
                                <td className="border border-slate-700 ">
                                    {book.title}
                                </td>
                                <td className="border border-slate-700 text-center">
                                    {book.author}
                                </td>
                                <td className="border border-slate-700  text-center max-md:hidden">
                                    {book.publishYear}
                                </td>
                                <td className='border border-slate-700  text-center'>
                                    <div className="flex justify-center gap-x-4">
                                        <Link to={`/books/details/${book._id}`}>
                                            <IoIosInformationCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/books/edit/${book._id}`}>
                                            <MdEditDocument className='text-2xl text-yellow-600' />
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`}>
                                            <MdDelete className='text-2xl text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    <tbody>
                        <tr>
                            <td colSpan="4" className="text-center">No Books Found</td>
                        </tr>
                    </tbody>
                )}

            </table>
        </div>
    )
}

export default BooksTable
