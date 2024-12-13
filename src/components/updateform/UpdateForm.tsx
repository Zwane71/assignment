import Image from 'next/image';
import React, { useState } from 'react';
import { useFormData } from '@/app/context/FormContext';

const UpdateForm = ({ handleShowModal }: { handleShowModal: () => void }) => {
  // Use the context to access and update form data
  const { formData, setFormData } = useFormData();

  // Handle input changes dynamically
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle saving form data
  const handleSave = () => {
    console.log(formData); 
    handleShowModal()
  };

  return (
    <div
      className="w-full h-full absolute top-0 backdrop-filter backdrop-brightness-75 flex justify-center items-center"
      onClick={handleShowModal}
    >
      <div
        className="bg-white relative w-[32rem] rounded-lg shadow-md p-5"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {/* Header */}
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Update scores</h2>
          <Image src="/html.svg" alt="html" width={40} height={40} />
        </div>

        {/* Form Inputs */}
        <div className="space-y-4 mt-4">
          {/* Rank Input */}
          <div className="flex justify-between">
            <label className="block font-medium mb-1" htmlFor="rank">
              Update your <span className="font-bold">Rank</span>
            </label>
            <input
              id="rank"
              name="rank" // Unique name for input fields
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="4"
              value={formData.rank}
              onChange={handleInputChange}
            />
          </div>

          {/* Percentile Input */}
          <div className="flex justify-between">
            <label className="block font-medium mb-1" htmlFor="percentile">
              Update your <span className="font-bold">Percentile</span>
            </label>
            <input
              id="percentile"
              name="percentile" // Unique name for input fields
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="90"
              value={formData.percentile}
              onChange={handleInputChange}
            />
          </div>

          {/* Current Score Input */}
          <div className="flex justify-between">
            <label className="block font-medium mb-1" htmlFor="currentScore">
              Update your <span className="font-bold">Current Score</span> (out of 15)
            </label>
            <input
              id="currentScore"
              name="currentScore" // Unique name for input fields
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="10"
              value={formData.currentScore}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-end justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
            onClick={handleShowModal} // Close modal on cancel
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleSave} // Save the form data
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
