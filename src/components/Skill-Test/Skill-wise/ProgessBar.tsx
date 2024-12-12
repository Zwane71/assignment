import React from 'react';

export default function ProgressBar({ label, progress, trackColor, progressColor, textColor }) {
  return (
    <li className='space-y-3'>
      <span className='text-gray-500'>{label}</span>
      <div className='flex space-x-4 items-center gap-8'>
        <div className={`relative w-[15rem] ${trackColor} rounded-full p-[4px]`}>
          <div
            className={`absolute top-0 left-0 h-full ${progressColor} rounded-full transition-all duration-500 ease-in-out`}
            style={{ width: `${progress}%` }}
          >
          </div>
        </div>  
        <span className={`${textColor} text-xs font-bold`}>{progress}%</span>
      </div>
    </li>
  );
}
