// src/components/Contact.js
import React from 'react';
import '../styles/styles.css'; 
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';

const Contact = () => (
  <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img src={email} alt="Email icon" className="icon contact-icon email-icon" />
        <p><a href="mailto:harshavarrdhini@gmail.com">harshavarrdhini@gmail.com</a></p>
      </div>
      <div className="contact-info-container">
        <img src={linkedin} alt="LinkedIn icon" className="icon contact-icon" />
        <p><a href="https://www.linkedin.com/in/harsha-vardhini-v-748056222/">LinkedIn</a></p>
      </div>
    </div>
  </section>
);

export default Contact;
