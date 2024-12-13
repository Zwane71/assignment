'use client'
import React, { useState } from 'react';
import Sideview from '../sideview/Sideview';

const Navbar = ({handleShowModal} : {handleShowModal : () => void}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen); 
  return (
    <div>
     
      <div className='border-b w-full'>
        <nav className='mx-5'>
          <ul className='font-bold flex justify-between p-3'>
           
            <li className='text-2xl lg:text-4xl'>
              <span>WhatBytes</span>
            </li>

            
            <li className='hidden md:block border-2 rounded-md p-2 text-sm md:text-base cursor-pointer hover:bg-gray-100'>
              Rahil Saddique
            </li>
            
            
            <li className="md:hidden p-4 cursor-pointer" onClick={toggleSidebar}>
              ☰ 
            </li>
            <li>
              <button onClick={handleShowModal}>
                Update
              </button>
            </li>
          </ul>

        </nav>
      </div>

     <div className=' flex md:hidden'>

     <Sideview toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}  />
     </div>
    </div>
  );
};

export default Navbar;
