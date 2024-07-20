// src/components/Skills.js
import React from 'react';
import '../styles/styles.css';

const Skills = () => (
  <section id="skills">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Skills</h1>
    <div className="skills-container">
      <div className="skills-card">
        <h2 className="skills-card-title">Programming Languages</h2>
        <div className="skills-list">
          <article>
            <i className="fab fa-java fa-2x"></i>
            <h3>Java</h3>
          </article>
          <article>
            <i className="fab fa-python fa-2x"></i>
            <h3>Python</h3>
          </article>
          <article>
            <i className="fab fa-c fa-2x"></i>
            <h3>C</h3>
          </article>
          <article>
            <i className="fas fa-database fa-2x"></i>
            <h3>SQL</h3>
          </article>
          <article>
            <i className="fab fa-js fa-2x"></i>
            <h3>JavaScript</h3>
          </article>
          <article>
            <i className="fab fa-css3-alt fa-2x"></i>
            <h3>CSS</h3>
          </article>
          <article>
            <i className="fab fa-html5 fa-2x"></i>
            <h3>HTML</h3>
          </article>
        </div>
      </div>

      <div className="skills-card">
        <h2 className="skills-card-title">Databases</h2>
        <div className="skills-list">
          <article>
            <i className="fas fa-database fa-2x"></i>
            <h3>MySQL</h3>
          </article>
          <article>
            <i className="fas fa-database fa-2x"></i>
            <h3>MongoDB</h3>
          </article>
        </div>
      </div>

      <div className="skills-card">
        <h2 className="skills-card-title">Frameworks and Libraries</h2>
        <div className="skills-list">
          <article>
            <i className="fab fa-node fa-2x"></i>
            <h3>Node.js</h3>
          </article>
          <article>
            <i className="fab fa-react fa-2x"></i>
            <h3>React.js</h3>
          </article>
          <article>
            <i className="fas fa-server fa-2x"></i>
            <h3>Express.js</h3>
          </article>
        </div>
      </div>

      <div className="skills-card">
        <h2 className="skills-card-title">Others</h2>
        <div className="skills-list">
          <article>
            <i className="fas fa-chart-line fa-2x"></i>
            <h3>Data Science</h3>
          </article>
          <article>
            <i className="fas fa-brain fa-2x"></i>
            <h3>Machine Learning</h3>
          </article>
          <article>
            <i className="fas fa-code fa-2x"></i>
            <h3>Data Structures</h3>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
