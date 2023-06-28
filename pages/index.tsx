import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Skills from "@/components/Skills"
import Expertise from "@/components/Expertise"
import Contact from "@/components/Contact"
import Head from "next/head"
export default function Home() {
  return (
    <>
    <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Check out my amazing portfolio showcasing my skills and projects." />
      </Head>
    <Navbar/>
    <Hero/>
    <Experience/>
    <Education/>
    <Skills/>
    <Expertise/>
    <Contact/>
    </>
  )
}
