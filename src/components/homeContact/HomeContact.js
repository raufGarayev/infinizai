import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import './HomeContact.sass'
import UnderlineContact from '../../assets/img/underline-contact.svg'

const HomeContact = () => {
    const form = useRef()
    const [status, setStatus] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_5o1mo5o", "template_kkyrvmk", form.current, "9wg0zyXNkNBaU1tgB")
          .then((result) => {
            setStatus(true)
              setTimeout(function() {
                setStatus(false)
            }, 7000)
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section className='homecontact'>
        <div className="homecontact_head">
            <h2>Join the largest gaming community</h2>
            <img src={UnderlineContact} alt="" />
        </div>
        <div className="homecontact_desc">
            <p>Subscribe to our latest news to get informed about changes on team, new uniforms, matches, tournaments and transfers. You can cancel this anytime.</p>
        </div>
        <div className="homecontact_form">
            <form ref={form} onSubmit={sendEmail}>
                <input id='email' name='email' type="text" placeholder='Your Email Adress' />
                <button type='submit'>Subscribe Now</button>
            </form>
        </div>
        <div className={status ? "homecontact_success-active" : "homecontact_success"}>
            <p>Done. Now you will get news by email.</p>
        </div>
    </section>
  )
}

export default HomeContact