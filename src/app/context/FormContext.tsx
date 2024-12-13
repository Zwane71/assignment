'use client'
import React, { createContext, useContext, useState } from 'react';

// Define the structure of the form data
interface FormData {
  rank: string;
  percentile: string;
  currentScore: string;
}

// Create the context with a default value of an empty form
const FormDataContext = createContext<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
} | null>(null);

// Create the provider component
export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use state to manage form data globally
  const [formData, setFormData] = useState<FormData>({
    rank: '',
    percentile: '',
    currentScore: '',
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Custom hook to access the form data context
export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
