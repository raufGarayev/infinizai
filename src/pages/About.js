import React from 'react'
import TeamList from '../components/teamList/TeamList'
import AboutUs from '../components/about/aboutUs/AboutUs'
import Results from '../components/about/results/Results'

import Breadcrumb from '../components/breadcrumb/Breadcrumb'

const About = () => {
  return (
    <>
      <Breadcrumb bc={'About Us'} />
      <AboutUs />
      <Results />
      <TeamList />
    </>
  )
}

export default About