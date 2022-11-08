import React from 'react'
import CloudGaming from '../components/home/cloud/CloudGaming'
import Header from '../components/home/header/Header'
import HomeShop from '../components/home/homeShop/HomeShop'
import Sponsors from '../components/home/sponsors/Sponsors'
import CustomChar from '../components/home/customChar/CustomChar'
import GameTypes from '../components/home/gameTypes/GameTypes'


const Home = () => {
  return (
    <>
      <Header />
      <Sponsors />
      <HomeShop />
      <CloudGaming />
      <CustomChar />
      <GameTypes />
    </>
  )
}

export default Home