// eslint-disable-next-line no-unused-vars
import React from 'react'

const Card = () => {
  return (
 

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-10">
    <a href="#">
        <img className="rounded-t-lg" src="https://imgs.search.brave.com/xl1eTDhndgvwn4kfyl5WaNb4GYPa3p01K-kBdy-S9Jk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY2/MDY1NzUzL3Bob3Rv/L2dsYXNzZXMtb24t/YS1zdGFjay1vZi1i/b29rcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VHVtUzdH/NmxNYlE1Q1pPaUZ4/aG9LUVRmMUo1TFlP/dlRyOUh5bndhaVlJ/UT0" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  )
}

export default Card
