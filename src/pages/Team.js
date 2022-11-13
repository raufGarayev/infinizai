import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import TeamList from '../components/teamList/TeamList'

const Team = () => {
  return (
    <>
        <Breadcrumb bc={'Team'}/>
        <TeamList />
    </>
  )
}

export default Team