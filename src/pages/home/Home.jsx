/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'


const Home = () => {
  const[books,setBooks]= useState([])
  const fectchBooks = async()=>{
  const response =  await axios.get('http://localhost:3000/book')
  console.log(response)
  }
  useEffect(()=>{
    fectchBooks()

  },[])
  return (
  <>
  <Navbar/>
  <div className = 'flex flex-wrap justify-evenly mt-20'>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>

  
  </div>
 
  </>
  )
}

export default Home
