import { useState } from "react";
import {
  FiArrowUpRight,
  FiArrowDown,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiMenu,
  FiX,
  FiMapPin,
  FiLayers,
  FiCpu,
  FiDatabase,
  FiCheck,
  FiCopy,
} from "react-icons/fi";
import portrait from "./assets/ahmad-bilal.jpg";
import "./App.css";

const github = "https://github.com/ahbilal220";
const resume = `${import.meta.env.BASE_URL}Ahmad-Bilal-Resume.pdf`;
const projects = [
  {
    title: "Smart Tripster",
    type: "AI & Backend",
    category: "AI & ML",
    repo: "Smart_Tripster_Backend",
    description:
      "From travel preferences to personalized itineraries. A Python backend connecting AI generation, places, hotels, and trip management.",
    tags: ["FastAPI", "Gemini", "PostgreSQL"],
    visual: "trip",
    detail: "Preferences → AI itinerary → Places & hotels",
  },
  {
    title: "Munch",
    type: "Backend & Real-time",
    category: "Backend",
    repo: "munch-backend",
    description:
      "A campus canteen ordering API with live kitchen queues, order tracking, and recommendations based on order history and time of day.",
    tags: ["FastAPI", "WebSockets", "SQLAlchemy"],
    visual: "munch",
    detail: "Order placed → Preparing → Ready",
  },
  {
    title: "Real-time Chat",
    type: "Full-stack Application",
    category: "Backend",
    repo: "User_Chat_App",
    description:
      "Two-way messaging built around WebSockets, with authentication, friend requests, and connection management across a NestJS API and React client.",
    tags: ["NestJS", "Socket.IO", "React"],
    visual: "chat",
    detail: "Connect. Send. Stay in sync.",
  },
  {
    title: "Care Home Marketplace",
    type: "Mobile & API Prototype",
    category: "Backend",
    repo: "Care-Home-Marketplace-BE",
    secondRepo: "Care-Home-Marketplace-App",
    description:
      "A Kotlin Android app paired with a FastAPI prototype for care-home discovery, shortlists, enquiries, and provider approval workflows.",
    tags: ["Kotlin", "FastAPI", "Android"],
    visual: "care",
    detail: "Discover → Shortlist → Enquire",
  },
  {
    title: "Student Management",
    type: "Web Application",
    category: "Backend",
    repo: "Student-Management-System",
    description:
      "Academic records, course assignments, CSV marks imports, and live student dashboards with policy-based access for admins and students.",
    tags: ["ASP.NET Core", "C#", "SignalR"],
    visual: "student",
    detail: "Students. Courses. Connected.",
  },
  {
    title: "Used Car Price Predictor",
    type: "Machine Learning",
    category: "AI & ML",
    repo: "Used_Car_Price_Pridictor",
    description:
      "A trained price prediction model served through Flask, using vehicle make, model, year, mileage, and fuel type from an OLX car dataset.",
    tags: ["Python", "Flask", "Pandas"],
    visual: "car",
    detail: "Vehicle features → Model → Estimated price",
  },
];
const skills = [
  {
    icon: <FiLayers className="skill-icon" />,
    title: "Backend engineering",
    text: "APIs that bring products together.",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "NestJS",
      "REST APIs",
      "WebSockets",
      "Stripe webhooks",
    ],
  },
  {
    icon: <FiDatabase className="skill-icon" />,
    title: "Data & infrastructure",
    text: "A solid foundation for every feature.",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLAlchemy",
      "Alembic",
      "AWS",
      "Azure",
      "Git & GitHub",
    ],
  },
  {
    icon: <FiCpu className="skill-icon" />,
    title: "AI & machine learning",
    text: "Intelligence with a practical purpose.",
    items: [
      "Pandas",
      "NumPy",
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "OpenAI API",
      "Claude API",
    ],
  },
];
function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}
function ProjectVisual({ project }) {
  return (
    <div className={`project-visual ${project.visual}`} aria-hidden="true">
      <span className="visual-label">{project.type}</span>
      {project.visual === "trip" ? (
        <div className="route-art">
          <span className="route-dot start" />
          <svg viewBox="0 0 400 130">
            <path d="M25 100 C110 100 65 15 160 30 S230 140 365 20" />
          </svg>
          <span className="route-dot end" />
          <div className="route-note">
            <FiMapPin /> A little less searching.
            <br />
            <b>A lot more exploring.</b>
          </div>
        </div>
      ) : project.visual === "munch" ? (
        <div className="order-art">
          <div>
            <span>ORDER #024</span>
            <b>
              Good food.
              <br />
              Zero waiting.
            </b>
          </div>
          <span className="order-status">
            <i /> Preparing
          </span>
        </div>
      ) : project.visual === "chat" ? (
        <div className="chat-art">
          <span>Hey! Are we connected?</span>
          <span>
            In real time. <FiCheck />
            <FiCheck />
          </span>
          <span className="typing">•••</span>
        </div>
      ) : project.visual === "care" ? (
        <div className="simple-art">
          <span>⌂</span>
          <b>
            A place to feel
            <br />
            at home.
          </b>
        </div>
      ) : project.visual === "student" ? (
        <div className="simple-art">
          <FiLayers />
          <b>
            Every student.
            <br />
            One connected system.
          </b>
        </div>
      ) : (
        <div className="chart-art">
          <div>
            {[25, 45, 37, 65, 57, 85, 100].map((height, i) => (
              <i key={i} style={{ height: `${height}%` }} />
            ))}
          </div>
          <span>DATA INTO DECISIONS</span>
        </div>
      )}
      <span className="visual-caption">{project.detail}</span>
    </div>
  );
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All work");
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("ahbilal220@gmail.com");
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Please copy the email address above.");
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Ahmad Bilal home">
            abk<span>.</span>
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          <nav
            id="navigation"
            className={menuOpen ? "open" : ""}
            aria-label="Main navigation"
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenuOpen(false);
            }}
          >
            {[
              ["Work", "projects"],
              ["Experience", "experience"],
              ["About", "about"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk <FiArrowUpRight />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> AI / ML & BACKEND ENGINEER
            </p>
            <h1>
              Practical AI.
              <br />
              Reliable systems.<br />
              <span>Thoughtfully built.</span>
            </h1>
            <p className="hero-intro">
              I’m Ahmad Bilal, an AI & Backend Engineer. I train machine learning
              models for prediction and emotion recognition, build AI-powered
              travel planning tools, and connect LLMs to reliable Python APIs.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <FiArrowDown />
              </a>
              <a className="text-link" href={resume} download>
                Download resume <FiDownload />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <FiMapPin /> Lahore, Pakistan
              </span>
              <span>
                Currently building at <b>CodeBryx</b>
              </span>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-outline" />
            <div className="portrait-photo"><img
              src={portrait}
              alt="Ahmad Bilal wearing glasses and a light waistcoat"
              width="960"
              height="1280"
              fetchPriority="high"
            /></div>
            <span className="portrait-index">
              01 / THE PERSON BEHIND THE CODE
            </span>
            <div className="portrait-tag">
              <span className="code-mark">&lt;/&gt;</span>
              <div>
                Built with curiosity.
                <br />
                <b>Engineered with care.</b>
              </div>
            </div>
          </div>
        </section>
        <div className="container impact-strip">
          <div>
            <FiCpu className="expertise-icon" aria-hidden="true" />
            <p>AI & Machine Learning<span>Predictive models · Deep learning · LLMs</span></p>
          </div>
          <div>
            <FiLayers className="expertise-icon" aria-hidden="true" />
            <p>Backend Engineering<span>Python APIs · Real-time systems · Integrations</span></p>
          </div>
          <div>
            <FiDatabase className="expertise-icon" aria-hidden="true" />
            <p>Data & Cloud<span>Data pipelines · Databases · Cloud services</span></p>
          </div>
        </div>
        <section className="section container" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>Ideas, built into systems.</h2>
            </div>
            <ExternalLink href={github} className="text-link">
              All repositories <FiArrowUpRight />
            </ExternalLink>
          </div>
          <div className="project-toolbar">
            <p>A selection of backend, AI, and full-stack projects.</p>
            <div className="filters" aria-label="Filter projects">
              {["All work", "Backend", "AI & ML"].map((item) => (
                <button
                  key={item}
                  aria-pressed={filter === item}
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {projects
              .filter((p) => filter === "All work" || p.category === filter)
              .map((project) => (
                <article className="project-card" key={project.repo}>
                  <ProjectVisual project={project} />
                  <div className="project-body">
                    <div className="project-title">
                      <h3>
                        <ExternalLink href={`${github}/${project.repo}`}>
                          {project.title}
                        </ExternalLink>
                      </h3>
                      <ExternalLink
                        href={`${github}/${project.repo}`}
                        aria-label={`View ${project.title} repository`}
                        className="project-arrow"
                      >
                        <FiArrowUpRight />
                      </ExternalLink>
                    </div>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    {project.secondRepo && (
                      <ExternalLink
                        className="companion-link"
                        href={`${github}/${project.secondRepo}`}
                      >
                        Explore the Android app <FiArrowUpRight />
                      </ExternalLink>
                    )}
                  </div>
                </article>
              ))}
          </div>
          <p className="more-work">
            Also on my GitHub:{" "}
            <ExternalLink href={`${github}/FastAPI-Postman-Demo`}>
              FastAPI & Postman demo <FiArrowUpRight />
            </ExternalLink>
            <ExternalLink href={`${github}/neetcode-submissions`}>
              Problem-solving practice <FiArrowUpRight />
            </ExternalLink>
          </p>
        </section>
        <section className="experience-section" id="experience">
          <div className="container experience-layout">
            <div>
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2>
                Real products.
                <br />
                Measurable impact.
              </h2>
              <p className="section-intro">
                From cloud infrastructure to AI-powered travel, I build the
                systems that keep things moving.
              </p>
              <a href={resume} className="text-link" download>
                Get the full resume <FiDownload />
              </a>
            </div>
            <div className="timeline">
              <article>
                <div className="role-meta">
                  <span>APR 2025 — PRESENT</span>
                  <span className="current-badge">Current</span>
                </div>
                <h3>Backend Developer</h3>
                <p className="company">CodeBryx · Lahore, Pakistan</p>
                <ul>
                  <li>
                    Build production Python services with FastAPI, integrating
                    Google Maps, Places, and Hotels APIs.
                  </li>
                  <li>
                    Reduced Smart Tripster’s external API costs by approximately
                    32% through caching and request batching.
                  </li>
                  <li>
                    Developed Pelopilex’s multi-step consultation and booking
                    flows, Stripe checkout, and payment webhooks.
                  </li>
                  <li>
                    Contributed workspace branding and pricing APIs with
                    role-based access to tgs-agent-be.
                  </li>
                </ul>
              </article>
              <article>
                <div className="role-meta">
                  <span>NOV 2024 — APR 2025</span>
                </div>
                <h3>Backend Development Intern</h3>
                <p className="company">CodeBryx · Lahore, Pakistan</p>
                <ul>
                  <li>
                    Built CloudUnity resource and tag management workflows
                    across AWS, Azure, and GCP using Python and Flask.
                  </li>
                  <li>
                    Improved cost optimization endpoint response times from 6
                    minutes to 1 minute — an approximately 83% reduction.
                  </li>
                  <li>
                    Developed AWS and Azure cost analysis pipelines with
                    actionable savings recommendations.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section id="about" className="section container">
          <div className="about-layout">
            <div>
              <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
              <h2>
                Curious by nature.
                <br />
                An engineer by practice.
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I’m an AI & Backend Engineer based in Lahore and a Software
                Engineering student at PUCIT. My work sits where reliable
                backend systems meet practical intelligence.
              </p>
              <p>
                I enjoy untangling complex workflows, designing clean API
                contracts, and making systems faster and easier to maintain.
                Python is my go-to; learning is the constant.
              </p>
            </div>
          </div>
          <div className="skill-grid">
            {skills.map(({ icon, title, text, items }) => (
              <article key={title} className="skill-card">
                {icon}
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="education-grid">
            <article>
              <p className="eyebrow">EDUCATION</p>
              <h3>BS Software Engineering</h3>
              <p>PUCIT, University of the Punjab</p>
              <div>
                <span>Sep 2023 — Present</span>
                <b>CGPA 3.57</b>
              </div>
              <p className="prior-education">
                Previously: FSc Pre-Engineering · Forman Christian College ·
                2021–2023
              </p>
            </article>
            <article>
              <p className="eyebrow">CONTINUED LEARNING</p>
              <h3>Machine Learning Specialization</h3>
              <p>Stanford Online / DeepLearning.AI · Coursera</p>
              <div>
                <span>Completed September 2024</span>
                <b>3 courses</b>
              </div>
              <p className="prior-education">
                Supervised learning, advanced algorithms, unsupervised learning,
                recommenders & reinforcement learning.
              </p>
            </article>
          </div>
        </section>
        <section className="contact-section container" id="contact">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> LET’S CONNECT
            </p>
            <h2>
              Have something
              <br />
              in mind? <span>Let’s build it.</span>
            </h2>
            <p>
              A product idea, an interesting problem, or just a hello.
              <br />
              I’d love to hear from you.
            </p>
            <a className="contact-email" href="mailto:ahbilal220@gmail.com">
              ahbilal220@gmail.com <FiArrowUpRight />
            </a>
            <div className="copy-row">
              <button onClick={copyEmail}>
                <FiCopy /> Copy email
              </button>
              <span role="status">{copyStatus}</span>
            </div>
          </div>
          <div className="contact-links">
            <ExternalLink href={github}>
              <FiGithub /> GitHub <FiArrowUpRight />
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/ahmad-bilal-317989294">
              <FiLinkedin /> LinkedIn <FiArrowUpRight />
            </ExternalLink>
            <a href={resume} download>
              <FiDownload /> Resume <FiArrowDown />
            </a>
          </div>
        </section>
      </main>
      <footer className="container">
        <a href="#home" className="brand">
          ab<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Ahmad Bilal · Built with intention.</p>
        <a href="#home" className="text-link">
          Back to top <FiArrowRight className="up-arrow" />
        </a>
      </footer>
    </>
  );
}
export default App;
