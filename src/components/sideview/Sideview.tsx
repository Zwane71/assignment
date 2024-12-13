'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { RiBarChartFill } from "react-icons/ri";
import { IoRibbonOutline, IoDocumentOutline } from "react-icons/io5";

// Function to determine active link style
const getLinkStyle = (pathname: string, linkPath: string) => {
  const isActive = pathname === linkPath;
  return isActive 
    ? 'border border-[#f4f6f8] bg-[#f4f6f8] text-[#5764ad] p-2 lg:p-5 bg-opacity-40 rounded-r-full' 
    : 'text-[#54585e] md:pl-4 lg:pl-8';
}
interface SideviewProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Sideview: React.FC<SideviewProps> = ({ toggleSidebar, isSidebarOpen }) => {
 
  const pathname = usePathname();

  return (
    <div>
     
           <div 
        className={`border-r p-3 w-40 md:w-40 lg:w-60 h-screen transition-transform ease-in-out 
        ${isSidebarOpen ? 'block' : 'hidden md:block'} lg:block`}
      >
        <div>
          <ul className='pt-5 font-bold text-base md:text-md gap-2 md:gap-5 flex flex-col mt-28'>
            
            {/* Dashboard Link */}
            <li>
              <Link 
                href={'/'} 
                className={`flex gap-2 items-center justify-start p-2 ${getLinkStyle(pathname, '/')}`} 
                aria-label="Dashboard"
              >
                <RiBarChartFill />
                Dashboard
              </Link>
            </li>
            
            {/* Skill Test Link */}
            <li>
              <Link 
                href={'/skill'} 
                className={`flex gap-2 items-center justify-start p-2 ${getLinkStyle(pathname, '/skill')}`} 
                aria-label="Skill Test"
              >
                <IoRibbonOutline />
                Skill Test
              </Link>
            </li>
            
            {/* Internship Link */}
            <li>
              <Link 
                href={'/internship'} 
                className={`flex gap-2 items-center justify-start p-2 ${getLinkStyle(pathname, '/internship')}`} 
                aria-label="Internship"
              >
                <IoDocumentOutline />
                Internship
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sideview;
