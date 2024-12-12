'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sideview = () => {
  const pathname = usePathname();
  return (
    <div className='border-r  w-40 md:w-40 lg:w-60 h-screen'>
      <div>
        <ul className='pt-5 font-bold text-base md:text-xl lg:text-2xl gap-2 md:gap-5 flex flex-col mt-28'>
          {/* Dashboard Link */}
          <li>
            <Link href={'/'} className={`link ${pathname === '/' ? 'border bg-[#bdbfc1] p-2 md:p-2 lg:p-4 pr-6 md:pr-8  lg:pr-10 text-[#4955a5] bg-opacity-40 rounded-r-full' : 'text-[#54585e] md:pl-4 lg:pl-8'}`}>
              <span className='ml-3'>Dashboard</span>
            </Link>
          </li>
          
          {/* Skill Test Link */}
          <li>
            <Link href={'/skill'} className={`link ${pathname === '/skill' ? 'border relative bg-[#bdbfc1] p-2 md:p-2  lg:p-4 pr-6 md:pr-8 lg:pr-10 text-[#4955a5] bg-opacity-40 rounded-r-full' : 'text-[#54585e] md:pl-4 lg:pl-8'}`}>
              
              <span className='ml-3'>Skill Test</span>
            </Link>
          </li>
          
          {/* Internship Link */}
          <li>
            <Link href={'/internship'} className={`link ${pathname === '/internship' ? 'border bg-[#bdbfc1] p-2 md:p-2  lg:p-4 pr-6 md:pr-8 lg:pr-10 text-[#4955a5] bg-opacity-40 rounded-r-full' : 'text-[#54585e] md:pl-4 lg:pl-8'}`}>
              
              <span className='ml-3'>Internship</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sideview
