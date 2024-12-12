import React from 'react';
import ProgressBar from './ProgessBar';


const SkillWise = () => {
  const htmlProgess = 80; 
  const tagProgress = 60;
  const refProgress = 24;
  const cssProgress = 96;

  return (
    <div className='border rounded-md p-8 w-[30rem] '>
      <div>
        <h1 className='font-semibold text-lg'>Syllabus Wise Analysis</h1>
        <ul className='mt-5 grid-cols-2 flex-col flex space-y-3'>
          
          <ProgressBar 
            label="HTML Tools, Forms, History" 
            progress={htmlProgess} 
            trackColor="bg-[#eaf2fe]" 
            textColor={'text-[#3A7DF5]'}
            progressColor="bg-[#3A7DF5]"
          />
          <ProgressBar 
            label="Tags & References in HTML" 
            progress={tagProgress} 
            trackColor="bg-[#FDF2ED]" 
            textColor={'text-[#FE8338]'}
            progressColor="bg-[#FE8338]"
          />
          <ProgressBar 
            label="Tables & References in HTML" 
            progress={refProgress} 
            trackColor="bg-[#FEECEC]" 
            textColor={'text-[#FA5353]'}
            progressColor="bg-[#FA5353]"
          />
          <ProgressBar 
            label="Tables & CSS basics" 
            progress={cssProgress} 
            trackColor="bg-[#E7F9ED]" 
            textColor={'text-[#25C163]'}
            progressColor="bg-[#25C163]"
          />
        </ul>
      </div>
    </div>
  );
};

export default SkillWise;
