import React from 'react'
import './HomeShop.sass'
import Fire from '../../../assets/img/fire.svg'
import CardLogo from '../../../assets/img/card-icon.svg'

const HomeShop = () => {
  return (
    <section className='homeshop'>
      <div className="homeshop_head">
        <div className="homeshop_head-top">
          <img src={Fire} alt="fire" />
          <h3>FUTURE OF ESPORTS</h3>
        </div>
        <p className='homeshop_head-main'>Your one stop shop gaming needs!</p>
        <p className='homeshop_head-desc'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
      </div>
      <div className="homeshop_cards">
        <div className="homeshop_cards-card">
          <div className="homeshop_cards-card-head">
            <img src={CardLogo} alt="card-logo" />
            <p>All New Gameplay</p>
          </div>
          <div className="homeshop_cards-card-desc">
            <p>Vivamus magna justo, lacinia eget coecetur sed, convallis at tellus. Curabitur non nulla sit Vestibum ante ipsum primis in faucibus orci</p>
          </div>
        </div>
        <div className="homeshop_cards-card">
          <div className="homeshop_cards-card-head">
            <img src={CardLogo} alt="card-logo" />
            <p>Generation Graphics</p>
          </div>
          <div className="homeshop_cards-card-desc">
            <p>Vivamus magna justo, lacinia eget coecetur sed, convallis at tellus. Curabitur non nulla sit Vestibum ante ipsum primis in faucibus orci</p>
          </div>
        </div>
        <div className="homeshop_cards-card">
          <div className="homeshop_cards-card-head">
            <img src={CardLogo} alt="card-logo" />
            <p>Lastest Game Engine</p>
          </div>
          <div className="homeshop_cards-card-desc">
            <p>Vivamus magna justo, lacinia eget coecetur sed, convallis at tellus. Curabitur non nulla sit Vestibum ante ipsum primis in faucibus orci</p>
          </div>
        </div>
        <div className="homeshop_cards-card">
          <div className="homeshop_cards-card-head">
            <img src={CardLogo} alt="card-logo" />
            <p>Multiplayer on the go</p>
          </div>
          <div className="homeshop_cards-card-desc">
            <p>Vivamus magna justo, lacinia eget coecetur sed, convallis at tellus. Curabitur non nulla sit Vestibum ante ipsum primis in faucibus orci</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeShop