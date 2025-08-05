import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: "Hotel Management System",
      description: "Full-stack app built with NestJS, React, and PostgreSQL featuring room calendar, reservations, inventory, and reports.",
      tech: ["NestJS", "React", "PostgreSQL"],
      image: "/projects/hotel.png",
      link: "#"
    },
    {
      title: "AI Chatbot with LangChain & Gemini",
      description: "FastAPI-powered chatbot that uses LangChain for retrieval-augmented generation with Google Gemini AI.",
      tech: ["FastAPI", "Python", "LangChain", "Gemini"],
      image: "/projects/chatbot.png",
      link: "#"
    },
    {
      title: "Real-time Messaging & Friends System",
      description: "NestJS WebSocket-based chat with photo sharing, typing indicators, and friend request system.",
      tech: ["NestJS", "WebSockets", "React"],
      image: "/projects/chat-system.png",
      link: "#"
    },
    {
      title: "Business Management System",
      description: "FastAPI + PostgreSQL + React app for customer, service, and invoice management.",
      tech: ["FastAPI", "React", "PostgreSQL"],
      image: "/projects/management.png",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
