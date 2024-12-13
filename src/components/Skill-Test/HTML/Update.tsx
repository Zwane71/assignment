 'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import UpdateForm from '@/components/updateform/UpdateForm'

const UpdateDiv = () => {
    const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  }
  return (
   <div>
     {showModal && <UpdateForm handleShowModal={handleShowModal}/>}
     <div className='border rounded-md p-6 w-[18rem] sm:w-[30rem] md:w-[30rem] lg:w-[40rem]'>
        <div className='flex justify-evenly gap-5 flex-col md:flex-row'>
            <div>
                
                <Image src={'/html.svg'} alt='html' width={50} height={50}/>
            </div>
            <div>
                <h1 className='font-semibold text-2xl'>Hyper Text Markup Language</h1>
                <p className='text-sm text-gray-600'>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
            </div>
                  <button onClick={handleShowModal}  className='border-4 w-24 h-12 text-center border-blue-950 bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      Update
                  </button>
        </div>
       
    </div>
  
   </div>
)}

export default UpdateDiv
