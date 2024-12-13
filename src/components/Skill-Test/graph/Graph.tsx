'use client'
import Image from 'next/image'
import React from 'react'
import { useFormData } from '@/app/context/FormContext';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TooltipItem } from 'chart.js'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Graph = () => {
    const { formData } = useFormData(); 

    const data = {
        labels: ['Assessment 1', 'Assessment 2', 'Assessment 3', 'Assessment 4', 'Your Score'], 
        datasets: [
            {
                label: 'Percentile Score',
                data: [65, 72, 80, 90, formData.percentile], 
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)', 
                tension: 0.4, 
                fill: true, 
                pointRadius: 5, 
                pointBackgroundColor: '#4CAF50',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true, 
                max: 100, 
                ticks: {
                    stepSize: 10,
                    callback: (tickValue: number | string) => {
                        // Ensure tickValue is treated as a number and return the correct format
                        return `${tickValue}%`;
                    },
                },
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'Percentile Comparison', 
            },
            tooltip: {
                callbacks: {
                    label: function (context: TooltipItem<'line'>) {
                        return `${context.raw}%`; 
                    },
                },
            },
        },
    };

    return (
        <div className='border p-5 rounded-md w-[30rem] lg:w-[40rem]'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-semibold text-lg'>Comparison Graph</h1>
                    <p className='text-gray-600 mt-4'>  
                        <span className='font-semibold'>
                            You scored {formData.percentile}% percentile
                        </span> 
                        {' '}which is lower than the <br />
                        average percentile of 72% of all the engineers who took the assessment.
                    </p>    
                </div>    
                <div className='bg-[#f4f6f8] w-16 h-16 rounded-full flex justify-center items-center'>
                    <Image src='/growth.png' alt='Trophy icon' width={30} height={30} />
                </div>
            </div>
            <div>
                <Line options={options} data={data} />
            </div>
        </div>
    )
}

export default Graph;
