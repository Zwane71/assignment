import React, { useState } from 'react';
import UpdateForm from './UpdateForm';


const ParentComponent = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    rank: '',
    percentile: '',
    currentScore: ''
  });

  // Function to update form data (called from UpdateForm)
  const handleFormDataChange = (data: { rank: string; percentile: string; currentScore: string }) => {
    setFormData(data);
  };

  return (
    <div>
      {/* Pass form data and function to update it to UpdateForm */}
      <UpdateForm handleFormDataChange={handleFormDataChange} formData={{
              rank: '',
              percentile: '',
              currentScore: ''
          }} handleShowModal={function (): void {
              throw new Error('Function not implemented.');
          } } />

    
    </div>
  );
};

export default ParentComponent;
