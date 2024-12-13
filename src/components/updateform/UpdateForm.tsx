import Image from 'next/image'
import React from 'react'

const UpdateForm = ({ handleShowModal }: { handleShowModal: () => void }) => {
  return (
    <div
      className='w-full h-full absolute top-0 backdrop-filter backdrop-brightness-75 backdrop-blur-md flex justify-center items-center'
      onClick={handleShowModal}
    >
      <div
        className='bg-white relative w-[32rem] rounded-lg shadow-md p-5'
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className='flex justify-between'>
            <h2 className='text-xl font-bold'>Update scores</h2>
            <Image src='/html.svg' alt='html' width={40} height={40} />
          </div>

          <div className="space-y-4">
            {/* Rank Input */}
            <div className='flex justify-between'>
              <label className="block font-medium mb-1" htmlFor="rank">
                Update your <span className="font-bold">Rank</span>
              </label>
              <input
                id="rank"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="4"
              />
            </div>

            {/* Percentile Input */}
            <div className='flex justify-between'>
              <label className="block font-medium mb-1" htmlFor="percentile">
                Update your <span className="font-bold">Percentile</span>
              </label>
              <input
                id="percentile"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="90"
              />
            </div>

            {/* Current Score Input */}
            <div className='flex justify-between'>
              <label className="block font-medium mb-1" htmlFor="current-score">
                Update your <span className="font-bold">Current Score</span> (out of 15)
              </label>
              <input
                id="current-score"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="10"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex right-0 items-end justify-end gap-2">
            <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateForm
