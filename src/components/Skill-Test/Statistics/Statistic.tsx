import Image from 'next/image'
import React from 'react'

const QuickStatistic = () => {
  return (
    <div className='border rounded-md p-6 gap-2 w-[15rem] md:w-[30rem] lg:w-[40rem]'>
        <div>
            <h1 className='font-semibold lg:text-xl'>Quick Statistics</h1>
            <ul className='mt-3 flex space-x-4 flex-col lg:flex-row'>
                <li className='flex items-center space-x-3'>
                    <Image src={'/trophy.svg'} alt='trophy' width={50} height={50} className='bg-[#f4f6f8] p-2 rounded-full' />
                    <div>
                        <span className='text-gray-600'>YOUR RANK</span>
                    </div>
                </li>
                <li className='flex items-center space-x-3'>
                    <Image src={'/trophy.svg'} alt='trophy' width={50} height={50} className='bg-[#f4f6f8] p-2 rounded-full' />
                    <div>
                        <span className='text-gray-600'>PERCENTILE</span>
                    </div>
                </li>
                <li className='flex items-center space-x-3'>
                    <Image src={'/trophy.svg'} alt='trophy' width={50} height={50} className='bg-[#f4f6f8] p-2 rounded-full' />
                    <div>
                        <span className='text-gray-600'>CORRECT ANSWERS</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default QuickStatistic
