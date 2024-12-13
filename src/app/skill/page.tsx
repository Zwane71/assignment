import Graph from '@/components/Skill-Test/graph/Graph'
import UpdateDiv from '@/components/Skill-Test/HTML/Update'
import QuestionDiv from '@/components/Skill-Test/Question/Question'
import SkillWise from '@/components/Skill-Test/Skill-wise/Skill'
import QuickStatistic from '@/components/Skill-Test/Statistics/Statistic'
import React from 'react'

const SkillPage = () => {
  return (
    <div className=' mx-10 p-2 md:p-10 md:mx-10'>
      <header className='mb-6'>
        <h1 className='text-xl'>Skill Test</h1>
      </header>
      
      <section className='flex mt-4 flex-col lg:flex-row lg:space-x-10 lg:space-y-10'>
        <div className='space-y-10 ' >
          
            <UpdateDiv  />
          <QuickStatistic />
          <Graph />
           
        </div>
        
        <div className='space-y-10' >
          <SkillWise />
          <QuestionDiv />
        </div>
      </section>
    </div>
  )
}

export default SkillPage
