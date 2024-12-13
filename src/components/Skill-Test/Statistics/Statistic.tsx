"use client"
import Image from 'next/image'
import React from 'react'
import { useFormData } from '@/app/context/FormContext'

const QuickStatistic = () => {

    const { formData } = useFormData();

  return (
    <div className='border rounded-md p-6 gap-2  w-[30rem] lg:w-[40rem]'>
        <div>
            <h1 className='font-semibold lg:text-xl'>Quick Statistics</h1>
            <ul className='mt-3 flex space-x-4 '>
                <li className='flex items-center space-x-3'>
                    <Image src={'/trophy.svg'} alt='trophy' width={50} height={50} className='bg-[#f4f6f8] p-2 rounded-full' />
                    <div>
                        <h1 className='font-bold'>{formData.rank}</h1>
                        <span className='text-gray-600'>YOUR RANK</span>
                    </div>
                </li>
                <li className='flex items-center space-x-3'>
                    <Image src={'/checklist.png'} alt='trophy' width={50} height={50} className='bg-[#f4f6f8] p-2 rounded-full' />
                    <div>
                        <h1 className='font-bold'>{formData.percentile}%</h1>
                        <span className='text-gray-600'>PERCENTILE</span>
                    </div>
                </li>
                <li className='flex items-center space-x-3'>
                    <Image src={'/check.png'} alt='trophy' width={50} height={50} className='bg-[#f4f6f8] p-2 rounded-full' />
                    <div>
                        <h1 className='font-bold'>{formData.currentScore}/15</h1>
                        <span className='text-gray-600'>CORRECT ANSWERS</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default QuickStatistic
