/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {
  const {id}= useParams()
  const [book,setBook] = useState()
  console.log(id)
  const fetchBook = async()=>{
    const response= await axios.get(`http://localhost:3000/book/${id}`)
    if(response.status===200){
      setBook(response.data.data)
    
    }
  }
useEffect(()=>{
  fetchBook()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
console.log(book)
  return (
    <>
      <Navbar/>
      
        <img className="rounded-t-lg" src="https://imgs.search.brave.com/xl1eTDhndgvwn4kfyl5WaNb4GYPa3p01K-kBdy-S9Jk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY2/MDY1NzUzL3Bob3Rv/L2dsYXNzZXMtb24t/YS1zdGFjay1vZi1i/b29rcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VHVtUzdH/NmxNYlE1Q1pPaUZ4/aG9LUVRmMUo1TFlP/dlRyOUh5bndhaVlJ/UT0" alt=""/>
  
    <div className="p-5">
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookName}</div>
       
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Rs.
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          
          </p>
   

     
    </div>
    </>
  )
}

export default SingleBook
