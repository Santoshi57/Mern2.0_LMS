/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link, useNavigate}from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Card = ({book}) => {
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate()
    console.log(book)
  return (
 

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-10" key={book._id}>
    <a href="#">
        <img className="rounded-t-lg" src="https://imgs.search.brave.com/xl1eTDhndgvwn4kfyl5WaNb4GYPa3p01K-kBdy-S9Jk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY2/MDY1NzUzL3Bob3Rv/L2dsYXNzZXMtb24t/YS1zdGFjay1vZi1i/b29rcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VHVtUzdH/NmxNYlE1Q1pPaUZ4/aG9LUVRmMUo1TFlP/dlRyOUh5bndhaVlJ/UT0" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookName}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Rs. {book.bookPrice}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {book.isbnNumber}
          </p>
    <Link to={`/book/${book._id}`}>See More...</Link>

     
    </div>
</div>


  )
}

export default Card
