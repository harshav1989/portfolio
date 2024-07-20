// src/components/About.js
import React from 'react';
import '../styles/styles.css';
import eduImg from '../assets/experience.png';
import expImg from '../assets/experience.png';
import arrow from '../assets/arrow.png';

const About = () => (
  <section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img src={eduImg} alt="Education icon" className="icon" />
            <h3>Education</h3>
            <p>Bachelor's Degree in Computer Science 
            </p>
          </div>
          <div className="details-container">
            <img src={expImg} alt="Experience icon" className="icon" />
            <h3>Experience</h3>
            <p>Machine Learning Intern at <br></br> CODTECH IT Solutions </p>
          </div>
        </div>
        <div className="text-container">
          <p>
            I am a Computer Science Engineer with a passion for artificial intelligence and machine learning. My journey in the tech world has been driven by a desire to innovate and solve real-world problems through technology. With a strong foundation in machine learning algorithms and a keen interest in AI, I am constantly exploring new ways to harness the power of data and algorithms to create impactful solutions. I am currently seeking an internship opportunity to further develop my skills and learn from industry experts.
          </p>
        </div>
      </div>
    </div>
    <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#skills'} />
  </section>
);

export default About;
