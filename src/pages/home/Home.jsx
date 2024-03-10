/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'


const Home = () => {
  const[books,setBooks]= useState([])
  const fectchBooks = async()=>{
  const response =  await axios.get(`http://localhost:3000/book`)
  // console.log(response.status)
  // console.log(response.data.data)
  // }
  //*****another way
if (response.status===200){
  setBooks(response.data.data)
}
  }

  useEffect(()=>{
    fectchBooks()
  },[])
  console.log(books)
  return (
  <>
  <Navbar/>
  <div className = 'flex flex-wrap justify-evenly mt-20'>
 {
  books.length > 0 && books.map((book)=>{
    return(
      // eslint-disable-next-line react/jsx-key
      <Card book={book}/>
    )
  })
 }

  
  </div>
 
  </>
  )
}

export default Home
