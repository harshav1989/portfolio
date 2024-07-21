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
              <p className="project-description">A highly accurate and efficient hybrid feature selection model for heart attack prediction using IoMT devices, combining FCBF, ACO, and GA for feature selection and hyperparameter tuning. Achieved 98.5% prediction accuracy with deployment in both edge and cloud environments using Python, Scikit-learn, SMOTE, XGBoost, Tkinter, Gradio, and Pickle.</p>
              <a href="https://github.com/harshav1989/Heart-Attack-Prediction" className="project-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          <div className="project-card swiper-slide">
            <div className="project-details">
              <h3 className="project-title">Song Recommendation System</h3>
              <p className="project-description">A sophisticated music recommendation system for Spotify using machine learning, TF-IDF vectorization, and cosine similarity to analyze user playlists and recommend songs, incorporating Pandas, Scikit-learn, and Matplotlib for data manipulation, vectorization, and visualization.</p>
              <a href="https://github.com/harshav1989/Song-Recommendation-Model-for-Spotify" className="project-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          <div className="project-card swiper-slide">
            <div className="project-details">
              <h3 className="project-title">Handwritten Character Recognition</h3>
              <p className="project-description">A high-performance Handwritten Character Recognition Model using a robust CNN architecture, achieving 97% validation accuracy by leveraging deep learning techniques, regularization, dropout, learning rate scheduling, and data augmentation, utilizing Python, TensorFlow, Keras, Pandas, NumPy, and OpenCV.</p>
              <a href="https://github.com/harshav1989/Handwriting-Recognition-Model-using-Deep-Learning" className="project-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          <div className="project-card swiper-slide">
            <div className="project-details">
              <h3 className="project-title">DineEase - Restaurant Web Application</h3>
              <p className="project-description">Developed a sophisticated restaurant web application, DineEase, featuring a dynamic menu display, online reservation system, and an admin panel for managing menu items, reservations, and orders, using React.js, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB.</p>
              <a href="https://github.com/harshav1989/Product-Demand-Analysis" className="project-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          <div className="project-card swiper-slide">
            <div className="project-details">
              <h3 className="project-title">Chat Application</h3>
              <p className="project-description">A real-time chat application using Java with client-server architecture, MySQL database integration, Java Swing for GUI, and implemented multi-client connectivity, user authentication, offline messaging, file sharing, group chats, user status display, and a notification system</p>
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
