'use client'
import React, { useState } from 'react';
import UpdateForm from './UpdateForm'; // Ensure correct path
import QuickStatistic from '../Skill-Test/Statistics/Statistic';

type FormData = {
  rank: string;
  percentile: string;
  currentScore: string;
};

const FormList = () => {
  const [formData, setFormData] = useState<FormData>({
    rank: '',
    percentile: '',
    currentScore: '',
  });

  const handleShowModal = () => {
    // Add modal toggle logic here
    console.log('Modal should show');
  };

  return (
    <div>
      {/* Pass the correct props to UpdateForm component */}
      <UpdateForm
        handleShowModal={handleShowModal}
        formData={formData}  // Pass the actual state object
        setFormData={setFormData}  // Pass the state updater function
      />
      
      {/* Pass the individual values of formData to QuickStatistic */}
      <QuickStatistic 
        rankPosition={formData.rank} 
        percentage={formData.percentile} 
        Score={formData.currentScore} 
      />
    </div>
  );
};

export default FormList;
