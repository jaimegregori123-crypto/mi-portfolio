import "./Proyectos.css";

const proyectos = [
  {
    id: 1,
    titulo: "Web Personal",
    descripcion: "Mi portfolio construido con React desde cero.",
    tecnologias: ["React", "CSS", "JavaScript"],
    github: "#",
  },
  {
    id: 2,
    titulo: "Proyecto de clase",
    descripcion: "Descripcion de algo que hayas hecho en el curso.",
    tecnologias: ["Java", "SQL"],
    github: "#",
  },
];

function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <p className="seccion-label">proyectos</p>
      <h2>Lo que he construido</h2>
      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-card">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <div className="tecnologias">
              {proyecto.tecnologias.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a href={proyecto.github}>Ver en GitHub →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
