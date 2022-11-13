import React from 'react'
import './TeamList.sass'
import team from '../../team.json'
import Fire from '../../assets/img/fire.svg'

const TeamList = () => {
  return (
    <section className='teamlist'>
        <div className="teamlist_head">
            <div className="teamlist_head-top">
                <img src={Fire} alt="fire" />
                <h3>FUTURE OF ESPORTS</h3>
            </div>
            <p>Meet Our Legends</p>
        </div>
        <div className="teamlist_list">
            {
                team.map((t) => (
                    <div key={t.id} className='teamlist_card'>
                        <img src={t.image} alt="img" />
                        <div className="teamlist_card-name">
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

export default TeamList