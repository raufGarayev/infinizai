import React from 'react'
import './Team.sass'
import team from '../../../team.json'

const Team = () => {
  return (
    <section className='team'>
        <div className="team_list">
            {
                team.map(t => (
                    <div className='team_card'>
                        <img src={t.image} alt="" />
                        <div className="team_card-name">
                            <p className='name'>{t.name}</p>
                            <p className='nick'>{t.nick}</p>
                        </div>
                    </div>
                ))
            }
        </div>


    </section>
  )
}

export default Team