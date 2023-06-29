import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const experience = [
  {
    "time": "Sep-2022 to Jul-2023",
    "role": "Software Engineer Intern",
    "company": "Future First Immigration",
    "description": "I contributed to the development of Tootler, a comprehensive platform that includes a chatbot, SOP generator, and LOR generator. Utilizing advanced AI techniques and algorithms, Tootler simplifies the handling of SOPs, LORs, and immigration inquiries. The chatbot component enables seamless interaction, providing users with information and support related to SOPs, LORs, and immigration processes. Powered by natural language processing and machine learning, the chatbot delivers accurate responses, enhancing the overall user experience.Tootler also incorporates SOP and LOR generators, automating the creation of tailored SOPs and LORs. These tools streamline the process, reducing time and effort traditionally required.Throughout development, I conducted testing, participated in code reviews, and provided feedback to enhance Tootler's functionality and reliability.Tootler's integrated features, including the chatbot, SOP generator, and LOR generator, revolutionize SOP, LOR, and immigration handling, saving time and ensuring high-quality documents with reliable support."
  },
  {
    "time": "Jun-2022 to Aug-2022",
    "role": "Contributor",
    "company": "Shri Ved Veyas Foundation",
    "description": "As part of my responsibilities in the Next.js frontend development team, I successfully addressed UI fixes and resolved bugs to improve the user experience. By diagnosing the issues, I identified broken elements that were impacting the functionality and usability of the application.I conducted thorough investigations into the reported bugs, analyzing the codebase and identifying the root causes of the issues. Through meticulous debugging and testing, I implemented effective solutions to rectify the problems and restore proper functionality.Furthermore, I paid close attention to UI fixes, ensuring that the visual elements of the application were aligned with the intended design and met the desired user experience. I carefully reviewed and adjusted layouts, styles, and interactions to enhance the overall look and feel of the frontend."
  }
]
const Index = () => {
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
      transition={{ duration: 1.0, delay: 0.4 }} ref={ref} id="experience">
      <h1 className='text-center text-portfolio-blue text-3xl py-8 font-light'>Experience</h1>
      <div ref={ref} className=' py-0 md:py-16 px-2 border-y-2 border-gray-300'>
        {experience?.map((exp, index) => {
          return (
            <div       
            key={index} className='relative '>
              <div className='  md:grid grid-cols-2 px-2 md:px-0  text-center md:text-start  gap-6 my-8 md:my-0 text-portfolio-blue'>
                <div  className='md:border-r  border-gray-200 md:pr-8 md:pb-8'>
                  <motion.div variants={leftcardVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1.0, delay: 0.4 }} id="experience">
                    <h1 className='font-medium tracking-widest md:text-right'>{exp.time}</h1>
                    <p className='font-light mt-2 tracking-widest md:text-right text-sm'>{exp.role}</p>
                  </motion.div>
                </div>
                <div  className='md:pl-2 mt-2 md:mt-0 md:pb-8 '>
                <motion.div variants={rightcardVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1.0, delay: 0.4 }}  id="experience">
                  <h1 className='font-light tracking-widest'>{exp.company}</h1>
                  <p className='md:max-w-lg font-light mt-2 text-sm leading-loose'>{exp.description}
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


export default Index