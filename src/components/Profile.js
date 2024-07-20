// src/components/Profile.js
import React from 'react';
import '../styles/styles.css';
import profPic from '../assets/file (1).png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import resume from '../assets/resume.pdf';

const Profile = () => (
  <section id="profile">
    <div className="section__pic-container">
      <img src={profPic} alt="Harsha Vardhini profile picture" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">Harsha Vardhini V</h1>
      <p className="section__text__p2">An Aspiring Software Developer with a strong foundation in machine learning</p>
      <div className="btn-container">
        <button className="btn btn-color-2" onClick={() => window.open(resume)}>
          Download CV
        </button>
        <button className="btn btn-color-1" onClick={() => window.location.href='./#contact'}>
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img src={linkedin} alt="My LinkedIn profile" className="icon" onClick={() => window.location.href='https://linkedin.com/'} />
        <img src={github} alt="My Github profile" className="icon" onClick={() => window.location.href='https://github.com/'} />
      </div>
    </div>
  </section>
);

export default Profile;
