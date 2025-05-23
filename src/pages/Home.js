import React from 'react'
import HeroSection from '../components/HeroSection'
import MySkills from '../components/MySkills'
import Statics from '../components/Statics'

function Home() {
  return (
    <div>
        <HeroSection />
        <Statics />
        <MySkills />
    </div>
  )
}

export default Home