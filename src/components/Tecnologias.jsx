import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";
import "./Tecnologias.css";

const tecnologias = [
  { icono: <FaHtml5 />, nombre: "HTML", color: "#e34f26" },
  { icono: <FaCss3Alt />, nombre: "CSS", color: "#1572b6" },
  { icono: <SiJavascript />, nombre: "JavaScript", color: "#f7df1e" },
  { icono: <FaReact />, nombre: "React", color: "#61dafb" },
  { icono: <FaJava />, nombre: "Java", color: "#f89820" },
  { icono: <FaPython />, nombre: "Python", color: "#3776ab" },
  { icono: <SiMysql />, nombre: "SQL", color: "#4479a1" },
  { icono: <FaGitAlt />, nombre: "Git", color: "#f05032" },
];

function Tecnologias() {
  return (
    <section className="tecnologias-seccion">
      <p className="seccion-label">tecnologías</p>
      <h2>Lo que manejo</h2>
      <div className="tecnologias-grid">
        {tecnologias.map((tech) => (
          <div key={tech.nombre} className="tech-card">
            <div className="tech-icono" style={{ color: tech.color }}>
              {tech.icono}
            </div>
            <span className="tech-nombre">{tech.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tecnologias;
