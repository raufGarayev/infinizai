import React from 'react'
import './HomeContact.sass'
import UnderlineContact from '../../assets/img/underline-contact.svg'

const HomeContact = () => {
  return (
    <section className='homecontact'>
        <div className="homecontact_head">
            <h2>Join the largest gaming community</h2>
            <img src={UnderlineContact} alt="" />
        </div>
        <div className="homecontact_desc">
            <p>Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus lectus. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesu ada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo</p>
        </div>
        <div className="homecontact_form">
            <form>
                <input type="text" placeholder='Your Email Adress' />
                <button type='submit'>Subscribe Now</button>
            </form>
        </div>
    </section>
  )
}

export default HomeContact