import React from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosInformationCircle } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from 'react';
import BooksTable from '../components/Home/BooksTable';
import BooksCard from '../components/Home/BooksCard';
import { FaRegAddressCard } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState("table");

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:3000/books")
            .then((Response) => {
                setBooks(Response.data.data);
                setLoading(false);
            }).catch((error) => {
                setLoading(true);
                console.log(error);
            })
    }, [])

    function toggleShowType() {
        showType === "table" ? setShowType("card") : setShowType("table")
    }

    return (
        <div className='p-4'>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Book's List</h1>
                <div className='flex'>
                    <div className="flex items-center mr-8">
                        <label className="relative inline-flex items-center cursor-pointer" >
                            <input type="checkbox" className="sr-only peer" onClick={toggleShowType} />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 peer-focus:ring-blue-300  transition-all"></div>
                            <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-5"></div>
                        </label>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{showType === "card" ? <FaRegAddressCard className='text-2xl' /> : <FaTableCells className='text-2xl' />}</span>
                    </div>

                    <Link to='/books/create'>
                        <IoAdd className='text-sky-800 text-4xl' />
                    </Link>
                </div>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                showType === "card" ? (<BooksCard books={books} />) : (<BooksTable books={books} />)
            )}
        </div>
    )
}

export default HomePage
