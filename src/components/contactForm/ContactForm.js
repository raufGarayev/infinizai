import React, {useRef, useState} from 'react';
import './ContactForm.sass'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik';
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineEditLocationAlt} from 'react-icons/md'


const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const ContactForm = () => {
    const form = useRef()
    const [status, setStatus] = useState(false)
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        validate,
        onSubmit: values => {
            emailjs.sendForm("service_5o1mo5o", "template_u1cjwfz", form.current, "9wg0zyXNkNBaU1tgB")
          .then((result) => {
            setStatus(true)
              setTimeout(function() {
                setStatus(false)
            }, 7000)
          }, (error) => {
              console.log(error.text);
          });
        },
    });
    return (
        <section className="contactForm">
            <div className="contactForm_left">
                <p className='contactForm_left-head'>Get A Quote</p>
                <p className='contactForm_left-desc'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nec Et Ipsum Ullamcorper Venenatis Fringilla. Pretium,</p>
                <div className="contactForm_left-email"><AiOutlineMail /><span>r.garayev@gmail.com</span></div>
                <div className="contactForm_left-phone"><BsTelephone /><span>+994552222222</span></div>
                <div className="contactForm_left-address"><MdOutlineEditLocationAlt /><span>Af House, 28 May, Baku</span></div>
                <div className="contactForm_left-social"></div>
            </div>
            <form ref={form} onSubmit={formik.handleSubmit}>
                <div className='form-top'>
                    <div className="form-top-name">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            placeholder="Rauf"
                        />
                        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    </div>

                    <div className="form-top-last">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder='Garayev'
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    </div>
                </div>

                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='rauf@garayev.dev'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Type your message' onChange={formik.handleChange}
                    value={formik.values.message}></textarea>

                <button type="submit">Send Message</button>

                <div className={status ? "form-success-active" : "form-success"}>
                    <p>Successfull! We got your message.</p>
                </div>
            </form>
        </section>

    );
};

export default ContactForm;