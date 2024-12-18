'use client'
import React, { useState } from 'react';
import Sideview from '../sideview/Sideview';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = ({handleShowModal} : {handleShowModal : () => void}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();
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
            
            <li className='gap-2 flex'>
            
            <Link href={''} className={`link${pathname ===  '/skill' ? 'flex ' : ' hidden'}`} >
            <button onClick={handleShowModal}  className='border-4 w-24 h-12 text-center border-blue-950 bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                      Update
              </button>
            </Link>
            
              <div className="md:hidden border h-12  rounded-md p-4 cursor-pointer" onClick={toggleSidebar}>
              <div className='flex text-center justify-center items-center'>
              ☰ 
              </div>
            </div>
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
