import React from 'react'
import PropTypes from 'prop-types'
const skills=[
    {
        name:"Next.js",
    },
    {
        name:"Redux",
    },
    {
        name:"Pyhton",
    },
    {
        name:"FastAPI",
    },
    {
        name:"Docker",
    },
    {
        name:"PostgreSQL",
    },
    {
        name:"TailwindCSS",
    },
    {
        name:"Prompt Engineering",
    }

]

const Index = () => {
  return (
    <div id="skills" className='bg-portfolio-blue'>
        <h1 className='text-center text-3xl text-white py-8 tracking-widest border-b border-white font-light'>Skills</h1>
   <div className='grid-cols-2 md:grid max-w-4xl gap-4 py-10 md:py-20 mx-auto'>
   {
    skills?.map((skill,index)=>{
        return(
            <div key={index} className=' text-white bg-slate-500 text-center m-2 md:m-0 px-10 py-4 backdrop-blur-lg'>
               <h1> {skill.name}</h1>
            </div>
        )
    })
   }
   </div>
   </div>
  )
}


export default Index