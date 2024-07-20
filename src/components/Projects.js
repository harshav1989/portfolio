// src/components/Projects.js
import React, { useEffect } from 'react';
import Swiper from 'swiper'; 
import 'swiper/swiper-bundle.css'; 
import { Navigation, Pagination } from 'swiper/modules';

const Projects = () => {
  useEffect(() => {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }, []);
  

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="project-card swiper-slide">
            <div className="project-details">
              <h3 className="project-title">Heart Attack Prediction</h3>
              <p className="project-description">A system to predict heart attacks using IoMT devices.</p>
              <a href="https://github.com/harshav1989/Heart-Attack-Prediction" className="project-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          <div className="project-card swiper-slide">
            <div className="project-details">
              <h3 className="project-title">Song Recommendation System</h3>
              <p className="project-description">A recommendation system for Spotify based on user preferences.</p>
              <a href="https://github.com/harshav1989/Song-Recommendation-Model-for-Spotify" className="project-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          <div className="project-card swiper-slide">
            <div className="project-details">
              <h3 className="project-title">Handwritten Character Recognition</h3>
              <p className="project-description">A system for recognizing handwritten characters using machine learning.</p>
              <a href="https://github.com/harshav1989/Handwriting-Recognition-Model-using-Deep-Learning" className="project-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          <div className="project-card swiper-slide">
            <div className="project-details">
              <h3 className="project-title">Product Demand Analysis</h3>
              <p className="project-description">Analyzing product demand using sales data.</p>
              <a href="https://github.com/harshav1989/Product-Demand-Analysis" className="project-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          <div className="project-card swiper-slide">
            <div className="project-details">
              <h3 className="project-title">Chat Application</h3>
              <p className="project-description">A real-time chat application using Node.js and Socket.io.</p>
              <a href="https://github.com/harshav1989/Chat-Application" className="project-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          
        </div>
        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Projects;
