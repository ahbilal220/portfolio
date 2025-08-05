import './Skills.css';
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs 
} from 'react-icons/fa';
import { SiNestjs, SiFlask, SiFastapi } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Skills() {
  const skillList = [
    { icon: <FaReact className="skill-icon react" />, name: "React.js" },
    { icon: <FaNodeJs className="skill-icon node" />, name: "Node.js" },
    { icon: <SiNestjs className="skill-icon nest" />, name: "NestJS" },
    { icon: <FaPython className="skill-icon python" />, name: "Python" },
    { icon: <SiFlask className="skill-icon flask" />, name: "Flask" },
    { icon: <SiFastapi className="skill-icon fastapi" />, name: "FastAPI" },
    { icon: <FaDatabase className="skill-icon db" />, name: "PostgreSQL" },
    { icon: <FaHtml5 className="skill-icon html" />, name: "HTML5" },
    { icon: <FaCss3Alt className="skill-icon css" />, name: "CSS3" },
    { icon: <FaJs className="skill-icon js" />, name: "JavaScript" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {skillList.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="skill-card">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Skills;
