import Image from 'next/image'
import React from 'react'
import Chart from 'chart.js/auto';


const Graph = () => {
  return (
    <div className='border p-5 rounded-md w-[15rem] md:w-[30rem] lg:w-[40rem]'>
    <div className='flex justify-between'>
        <div>
            <h1 className='font-semibold text-lg'>Comparison Graph</h1>
            <p className='text-gray-600 mt-4'>  
                <span className='font-semibold'>
                    You scored ... percentile
                </span> 
                {' '}which is lower than the <br />
                average percentile of 72% of all the engineers who took the assessment.
            </p>    
        </div>    
        <div className='bg-[#f4f6f8] rounded-full flex justify-center items-center'>
            <Image src='/trophy.svg' alt='Trophy icon' width={50} height={50} />
        </div>
    </div>
</div>

  )
}

export default Graph