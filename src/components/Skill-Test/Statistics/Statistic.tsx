"use client"
import Image from 'next/image'
import React from 'react'
import { useFormData } from '@/app/context/FormContext'

const QuickStatistic = () => {

    const { formData } = useFormData();

  return (
    <div className='border rounded-md p-6 gap-2 w-[30rem] lg:w-[40rem]'>
        <div>
            <h1 className='font-semibold lg:text-xl'>Quick Statistics</h1>
            <ul className='mt-3 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'>
                <li className='flex items-center space-x-3'>
                    <Image src={'/trophy.svg'} alt='trophy' width={40} height={40} className='bg-[#f4f6f8] p-2 rounded-full' />
                    <div>
                        <h1 className='font-bold'>{formData.rank || '...'}</h1>
                        <span className='text-gray-600 text-sm lg:text-base'>YOUR RANK</span>
                    </div>
                </li>
                <li className='flex items-center space-x-3'>
                    <Image src={'/checklist.png'} alt='checklist' width={40} height={40} className='bg-[#f4f6f8] p-2 rounded-full' />
                    <div>
                        <h1 className='font-bold'>{formData.percentile || ' ...'}%</h1>
                        <span className='text-gray-600 text-sm lg:text-base'>PERCENTILE</span>
                    </div>
                </li>
                <li className='flex items-center space-x-3'>
                    <Image src={'/check.png'} alt='check' width={40} height={40} className='bg-[#f4f6f8] p-2 rounded-full' />
                    <div>
                        <h1 className='font-bold'>{formData.currentScore || ' ...'}{' '}/15</h1>
                        <span className='text-gray-600 text-sm lg:text-base'>CORRECT ANSWERS</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default QuickStatistic
