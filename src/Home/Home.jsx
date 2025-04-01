import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import WelcomeSection from '../Components/WelcomeSection'
import Program from '../Components/Program'
import ActivitiesSection from '../Components/Activities'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <>
     <Navbar/>
     <Banner/>
     <WelcomeSection/>
     <Program/>
     <ActivitiesSection/>
     <Footer/>
    </>
  )
}
