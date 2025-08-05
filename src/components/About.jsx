import './About.css';
import profilePic from '../assets/IMG_20250331_190909_261.webp';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Ahmad Bilal</strong>, an AI and Full Stack Developer with a passion for 
            building smart, efficient, and user-friendly applications. I love 
            combining creativity with problem-solving to deliver impactful 
            solutions.
          </p>
          <p>
            My expertise includes working with modern technologies like React, 
            Node.js, Python, and AI/ML tools to develop scalable projects. 
            When I’m not coding, I enjoy exploring new ideas and learning 
            cutting-edge technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
