import './Hero.css';
import profilePic from '../assets/IMG_20250331_190909_261.webp';
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className='container hero-container'>
        <div className='hero-content'>
          <h1>Hi, I'm Ahmad Bilal</h1>
          <p>Software Engineering student and Back-end Developer skilled in building RESTful APIs with FastAPI, Flask, and Nest.js. Experienced in LLM integration via LangChain, Gemini, and OpenAI. Compassion for problem solving, programming fundamentals, and DSA.</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
        <div className='hero-img'>
          <img src={profilePic} alt="Ahmad Bilal" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
