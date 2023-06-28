import React, { useEffect } from 'react'
import Image from 'next/image'
import ProfileCard from './profileCard'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
 

  const navigation = {
    social: [
      {
        name: "GitHub",
        href: "https://github.com/inishantxchandel",
        icon: (props: JSX.IntrinsicElements["svg"]) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.21.68-.48V20.6c-2.782.605-3.369-1.33-3.369-1.33-.454-1.151-1.109-1.46-1.109-1.46-.907-.62.068-.608.068-.608 1.002.073 1.528 1.04 1.528 1.04.89 1.53 2.337 1.088 2.904.832.09-.648.35-1.088.637-1.338-2.223-.25-4.555-1.112-4.555-4.943 0-1.09.388-1.983 1.03-2.682-.103-.247-.448-1.263.098-2.635 0 0 .833-.267 2.726 1.02C8.412 6.188 9.21 6 10.04 6c.83 0 1.627.188 2.347.55 1.894-1.287 2.727-1.02 2.727-1.02.547 1.372.203 2.388.1 2.635.642.7 1.03 1.593 1.03 2.682 0 3.84-2.335 4.688-4.562 4.932.358.307.678.915.678 1.847v2.734c0 .27.18.57.693.47C19.138 20.165 22 16.41 22 12c0-5.52-4.48-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    
      {
        name: "Instagram",
        href: "https://www.instagram.com/iinishantxchandel/",
        icon: (props: JSX.IntrinsicElements["svg"]) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Twitter",
        href: "https://twitter.com/nishantxchandel",
        icon: (props: JSX.IntrinsicElements["svg"]) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/nishant-chandel-000020211/",
        icon: (props: JSX.IntrinsicElements["svg"]) => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 50 50"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M41 4H9C6.24 4 4 6.24 4 9V41C4 43.76 6.24 46 9 46H41C43.76 46 46 43.76 46 41V9C46 6.24 43.76 4 41 4ZM17 20V39H11V20H17ZM11 14.47C11 13.07 12.2 12 14 12C15.8 12 16.93 13.07 17 14.47C17 15.87 15.88 17 14 17C12.2 17 11 15.87 11 14.47ZM39 39H33C33 39 33 29.74 33 29C33 27 32 25 29.5 24.96H29.42C27 24.96 26 27.02 26 29C26 29.91 26 39 26 39H20V20H26V22.56C26 22.56 27.93 20 31.81 20C35.78 20 39 22.73 39 28.26V39Z" />
          </svg>
        ),
      },

    ],
  };
  return (
    <div       ref={ref}
    className=''>
      <div className=''>
        <Image src='/pexels-photo-6446667.webp' width={1500} height={1500} className='w-full h-[700px] object-cover hidden md:flex' alt="cover" />
      </div>
      <div className='md:absolute md:w-full md:top-56'>
        <ProfileCard />
      </div>
      <div className='bg-portfolio-grey'>
        <div className='max-w-4xl bg-portfolio-blue mx-auto flex justify-center gap-6 items-center text-center py-4'>
          {navigation.social?.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:cursor-pointer transition-all hover:scale-125"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <motion.div
          variants={Variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.0, delay: 0.4 }}
          className=' max-w-xl  mx-auto px-2 md:px-0 py-10  md:py-20 text-portfolio-blue text-center'>
          <h1 className='tracking-wide text-3xl font-light'>Hello! I'm Nishant</h1>
          <p className='font-light text-sm md:text-base mt-4 md:mt-8 leading-relaxed'>
            I am a skilled and versatile full stack developer, adept in both front-end and back-end development. With a deep-rooted passion for coding and a knack for problem-solving, I am committed to delivering top-notch solutions. By staying abreast of the latest technologies and industry trends, I strive to create captivating and user-friendly applications. Allow me to leverage my expertise and experience to craft innovative and efficient solutions tailored to your needs. Together, let's bring your vision to life!</p>
        </motion.div> </div>
    </div>
  )
}


export default Index