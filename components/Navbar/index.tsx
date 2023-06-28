import React, { useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    useEffect(() => {
        const handleResize = () => {
            const isMediumViewport = window.innerWidth >= 768;
            if (isMediumViewport) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
      };
    return (
        <div className='px-4 md:bg-portfolio-grey py-8 md:fixed md:w-full z-50   mx-auto'>
            <div className='container mx-auto  w-full'>
            {!isOpen ?
                <div className='flex justify-between   items-center'>
                    <Link onClick={handleScroll}  href={"/"}><h1 className='text-portfolio-blue text-2xl sm:text-3xl font-light tracking-wide'>Nishant Chandel</h1></Link>
                    <ul className='hidden md:flex gap-10 justify-center text-portfolio-blue'>
                       <Link onClick={handleScroll} href="#experience"> <li className='text-center font-light hover:cursor-pointer py-3'>Experience</li></Link>
                       <Link onClick={handleScroll} href="#education"><li className='text-center font-light hover:cursor-pointer py-3'>Education</li></Link>
                       <Link onClick={handleScroll} href="#skills"> <li className='text-center font-light hover:cursor-pointer py-3'>Skills</li></Link>

                      <Link onClick={handleScroll} href="#expertise">  <li className='text-center font-light hover:cursor-pointer py-3'>Expertise</li></Link>
                      <Link onClick={handleScroll} href="#contact">  <li className='text-center font-light hover:cursor-pointer py-3'>Contact</li></Link>
                    </ul>
                    <Bars3Icon onClick={() => setIsOpen(true)} className="h-10 md:hidden hover:cursor-pointer w-10 p-2 rounded-full bg-portfolio-blue text-white" />


                </div>
            :
                <div className='max-h-screen inset-0 fixed z-40 bg-white overflow-hidden  w-full'>
                    <div className='flex justify-end pr-8 mt-8 -mr-4 overflow-hidden scrollbar-hidden'>
                        <XMarkIcon onClick={() => setIsOpen(false)} className="h-10  hover:cursor-pointer md:hidden w-10 p-2 rounded-full bg-portfolio-slate text-white" />                </div>

                    <ul className='justify-center flex flex-col'>
                    <Link onClick={()=>setIsOpen(false)} href="#experience">   <li className='text-center font-light hover:cursor-pointer py-3'>Experience</li></Link>
                    <Link onClick={()=>setIsOpen(false)} href="#education">    <li className='text-center font-light hover:cursor-pointer py-3'>Education</li></Link>
                    <Link onClick={()=>setIsOpen(false)} href="#skills">   <li className='text-center font-light hover:cursor-pointer py-3'>Skills</li></Link>

                    <Link onClick={()=>setIsOpen(false)} href="#expertise">   <li className='text-center font-light hover:cursor-pointer py-3'>Expertise</li></Link>
                    <Link onClick={()=>setIsOpen(false)} href="#contact">   <li className='text-center font-light hover:cursor-pointer py-3'>Contact</li></Link>




                    </ul>
                </div>}
                </div>
        </div>
    )
}


export default Navbar;