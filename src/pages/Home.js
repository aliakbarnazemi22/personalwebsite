import React from 'react'
import HeroSection from '../components/HeroSection'
import MySkills from '../components/MySkills'
import Statics from '../components/Statics'
import WE from '../components/WE'
import MyProjects from '../components/MyProjects'

function Home() {
  return (
    <div>
        <HeroSection />
        <Statics />
        <MySkills />
        <WE />
        <MyProjects />
    </div>
  )
}

export default Home