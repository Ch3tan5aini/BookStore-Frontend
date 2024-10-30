import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

const BackButton = ({ destination = '/' }) => {
    return (
        <div>
            <Link to={destination} className='px-4'>
                <FaArrowLeft className='text-2xl' />
            </Link>
        </div>
    )
}

export default BackButton
