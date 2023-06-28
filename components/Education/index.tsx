import React,{useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const experience=[
    {
        "time":"2018-2020",
        "class":"Secondary Education",
        "institute":"Shivalik Model Sr. Sec. School",
        "description":"With a non-medical background, I have consistently achieved an impressive percentage of 93 throughout my academic journey. I have excelled in subjects such as mathematics, physics, chemistry, and computer science, demonstrating a strong aptitude for analytical thinking and problem-solving. My dedication to academic excellence has allowed me to grasp complex concepts and apply them effectively. By maintaining such high academic performance, I have showcased my commitment to learning and my ability to consistently deliver outstanding results."
    },
    {
        "time":"2020-2024",
        "class":"B.Tech CSE",
        "institute":"Punjabi University Patiala",
        "description":"Having achieved a CGPA of 8.5, I have gained a strong understanding of algorithms, data structures, and software engineering methodologies. Through my studies, I have acquired valuable knowledge in these areas, enabling me to approach problem-solving with a structured and efficient mindset. Additionally, I have actively collaborated with my peers on various team projects, which has enhanced my teamwork and communication skills. Working together, we have tackled complex challenges, shared ideas, and collectively achieved successful outcomes. These experiences have not only expanded my technical expertise but also fostered effective collaboration and communication within a team environment."
    },
   
]
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
     <motion.div
    variants={Variants}
    initial="hidden"
    animate={controls}
    transition={{ duration: 1.0, delay: 0.4 }} ref={ref} id="education">
        <h1  className='text-center text-portfolio-blue text-3xl py-8 font-light'>Education</h1>
        <div className=' py-0 md:py-16 px-2 border-y-2 border-gray-300'>
            {experience?.map((edu,index)=>{
                return(
                  <div       
            key={index} className='relative '>
              <div className='  md:grid grid-cols-2 px-2 md:px-0 text-center md:text-start   gap-6 my-8 md:my-0 text-portfolio-blue'>
                <div  className='md:border-r border-gray-200 md:pr-8 md:pb-8'>
                  <motion.div variants={leftcardVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1.0, delay: 0.4 }} id="experience">
                    <h1 className='font-medium tracking-widest md:text-right'>{edu.time}</h1>
                    <p className='font-light mt-2 tracking-widest md:text-right text-sm'>{edu.class}</p>
                  </motion.div>
                </div>
                <div  className='md:pl-2 mt-2 md:mt-0 md:pb-8 '>
                <motion.div variants={rightcardVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1.0, delay: 0.4 }}  id="experience">
                  <h1 className='font-light tracking-widest'>{edu.institute}</h1>
                  <p className='md:max-w-lg font-light mt-2 text-sm leading-loose'>{edu.description}
                  </p>
                  </motion.div>
                </div>
              </div>
            </div>

                )
            })}
       
       
        </div>
       
    </motion.div>
  )
}


export default index