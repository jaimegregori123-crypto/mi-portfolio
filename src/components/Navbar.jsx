import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ nombre }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progreso, setProgreso] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollActual = window.scrollY;
      const porcentaje = (scrollActual / scrollTotal) * 100;

      setProgreso(porcentaje);
      setScrolled(scrollActual > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="progreso-barra" style={{ width: `${progreso}%` }} />

      <div className="nav-logo">{nombre}</div>

      <ul className={`nav-links ${menuAbierto ? "abierto" : ""}`}>
        <li>
          <a href="#sobre-mi">Sobre mí</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>

      <button
        className="hamburguesa"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
