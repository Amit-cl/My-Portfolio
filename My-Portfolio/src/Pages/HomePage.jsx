import React from 'react'
import './HomePage.css' 

const HomePage = () => {
  return (
    <>
      <div className="social-icons">
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fas fa-envelope"></i></a>
      <a href="#"><i className="fab fa-github"></i></a>
    </div>
      <section className="hero">
      <img src="/logo.svg" alt="Logo" className="logo" />

      <div className="hero-text">
        <h1>Anurag Singh</h1>
        <p className="subtitle">MERN Stack Developer</p>

        <div className="hero-buttons">
          <button className="btn about">About Me →</button>
          <button className="btn works">Latest Works</button>
        </div>
      </div>

      <div className="chat-bubble">
        <span>Chat with us</span>
        <img src={profile} alt="Profile" className="chat-avatar" />
      </div>
    </section>
    </>
  )
}

export default HomePage
