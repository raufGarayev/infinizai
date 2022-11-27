import React from 'react';
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactForm from "../components/contactForm/ContactForm"
import HomeContact from "../components/homeContact/HomeContact";

const Contact = () => {
    return (
        <>
            <Breadcrumb bc={'Contact'} />
            <ContactForm />
        </>
    );
};

export default Contact;