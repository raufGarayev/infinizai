import React from 'react'

import './Sponsors.sass'
import UnderlineSponsors from '../../../assets/img/underline-sponsors.svg'
import Ideaa from '../../../assets/img/sponsors/ideaa.svg'
import Amara from '../../../assets/img/sponsors/amara.svg'
import LightAi from '../../../assets/img/sponsors/lightai.svg'
import Circle from '../../../assets/img/sponsors/circle.svg'
import Muzica from '../../../assets/img/sponsors/muzica.svg'
import LightAi2 from '../../../assets/img/sponsors/lightai-2.svg'

const Sponsors = () => {
  return (
    <section className='sponsors'>
        <div className="sponsors-header">
            <h2>Our Sponsors</h2>
            <img src={UnderlineSponsors} alt="underline" />
        </div>

        <div className="sponsors-desc">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
        </div>

        <div className="sponsors-companies">
            <div className="sponsors-companies_cards"><img src={Ideaa} alt="ideaa" /></div>
            <div className="sponsors-companies_cards"><img src={Amara} alt="amara" /></div>
            <div className="sponsors-companies_cards"><img src={LightAi} alt="lightai" /></div>
            <div className="sponsors-companies_cards"><img src={Circle} alt="circle" /></div>
            <div className="sponsors-companies_cards"><img src={Muzica} alt="muzica" /></div>
            <div className="sponsors-companies_cards"><img src={LightAi2} alt="lightai-2" /></div>
        </div>
    </section>
  )
}

export default Sponsors