// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/styles.css';
import './styles/mediaqueries.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => (
  <div>
    <Navbar />
    <Profile />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;
