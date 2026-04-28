// src/App.js

import React from "react";
import "./App.css";
import myphoto from "../src/myphoto.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Hello, I'm Your Name</h1>
          <p>Frontend Developer | UI Designer | Student</p>

          <div className="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:youremail@gmail.com">
              <FaEnvelope />
            </a>

            <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>

          <button>Hire Me</button>
        </div>

        <div className="hero-image">
          <img src={myphoto} alt="profile" />
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate developer creating modern, responsive and user-friendly
          websites using React.js.
        </p>
      </section>

      <section className="projects">
        <h2>My Projects</h2>

        <div className="project-grid">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio using React.</p>
          </div>

          <div className="card">
            <h3>Weather App</h3>
            <p>Live weather forecast app.</p>
          </div>

          <div className="card">
            <h3>Todo App</h3>
            <p>Task manager with local storage.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: youremail@gmail.com</p>
      </section>
    </div>
  );
}

export default App;