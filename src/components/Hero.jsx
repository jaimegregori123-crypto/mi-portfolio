import "./Hero.css";

function Hero({ nombre, rol, descripcion }) {
  return (
    <div className="hero">
      <h1>Hola, soy {nombre}</h1>
      <p>{rol}</p>
      <p>{descripcion}</p>
      <div className="hero-botones">
        <button
          className="btn-primario"
          onClick={() =>
            document
              .getElementById("proyectos")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Ver proyectos
        </button>
        <button
          className="btn-secundario"
          onClick={() =>
            document
              .getElementById("contacto")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Contactar
        </button>
      </div>
    </div>
  );
}

export default Hero;
