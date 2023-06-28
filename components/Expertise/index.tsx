import React,{useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const expertise=[
    {
        title:"Next.js",
        description:"Next.js is a React framework that enables several features like server side rendering, static site generation, and more. It is a great framework for building web applications.",
    },
    {
        title:"Redux",
        description:"Redux is a state management library for JavaScript applications. It helps in managing the state of the application in a predictable manner.",
    },
    {
        title:"Pyhton",
        description:"Python is a general purpose programming language that is used for web development, data science, machine learning, and more.",
    }]

const index = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
      }, [controls, inView]);
    
      const Variants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      };
      const leftcardVariants = {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      };
      const rightcardVariants = {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      };
  return (
    <div id="expertise">
        <h1 className='text-center text-3xl text-portfolio-blue py-8 border-b border-portfolio-slate tracking-widest font-light'>Expertise</h1>
        <div className='md:grid grid-cols-3 max-w-4xl mx-auto'>
        {
            expertise.map((expert,index)=>{
                return(
                    <motion.div variants={leftcardVariants}
                    key={index}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1.0, delay: 0.4 }}                         ref={ref}
                    id="experience">
                    <div  className='  px-2 md:px-4 py-4 md:py-20'>
                        <h1 className='text-portfolio-blue text-xl font-medium'>{expert.title}</h1>
                        <p className='text-portfolio-blue text-sm font-light mt-2'>{expert.description}</p>
                    </div>
                    </motion.div>
                )
            })
        }

        </div>
    </div>
  )
}


export default index