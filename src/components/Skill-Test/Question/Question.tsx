import React from 'react'

const QuestionDiv = () => {
  return (
    <div className='border rounded-md p-6'>
        <div>
            <h1>Question Analysis</h1>
        </div>
        <div>
            <p className='text-gray-500'>
                <span className='font-bold'>You scored ... Questions correct out of 15.</span>
                However it still <br /> needs some improvement 
            </p>
        </div>
    </div>
  )
}

export default QuestionDiv