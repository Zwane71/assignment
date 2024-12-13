'use client'
import { useFormData } from '@/app/context/FormContext'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from 'chart.js'

ChartJS.register(
    ArcElement, 
    Tooltip,
    Legend
)

const QuestionDiv = () => {
  const { formData } = useFormData(); 

  // Ensure currentScore is treated as a number, with a fallback value of 0
  const currentScore = formData?.currentScore ?? 0;

  // Make sure currentScore is a valid number
  const correctAnswers = currentScore;
  const incorrectAnswers = 15 - correctAnswers;

  const data = {
    labels: ['Correct Answers', 'Incorrect Answers'], 
    datasets: [
      {
        label: 'Question Analysis',
        data: [correctAnswers, incorrectAnswers], 
        backgroundColor: ['#3b7df5', '#4CAF50'], 
        hoverBackgroundColor: ['#66BB6A', '#FF7043'], 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Question Analysis', 
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'doughnut'>) {
            return `${context.raw} Answers`;
          },
        },
      },
    },
    cutout: '70%', 
  };

  return (
    <div className='border rounded-md p-6'>
      <div>
        <h1 className='font-semibold text-lg'>Question Analysis</h1>
      </div>
      <div>
        <p className='text-gray-500'>
          <span className='font-bold'>
            You scored {currentScore} Questions correct out of 15.
          </span>
          However, it still <br /> needs some improvement.
        </p>
      </div>
      <div>
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
}

export default QuestionDiv;
