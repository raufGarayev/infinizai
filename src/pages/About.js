import React from 'react'
import Team from '../components/about/team/Team'


import Breadcrumb from '../components/breadcrumb/Breadcrumb'

const About = () => {
  return (
    <>
      <Breadcrumb bc={'About Us'} />
      <Team />
    </>
  )
}

export default About