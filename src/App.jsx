/*
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import SobreMi from "./components/SobreMi";

function App() {
  return (
    <div>
      <Navbar nombre="Jaime" />
      <Hero
        nombre="Jaime"
        rol="Desarrollador Web Junior"
        descripcion="Estudiante de DAM apasionado por el desarrollo web"
      />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
*/

import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import SobreMi from "./components/SobreMi";
import Tecnologias from "./components/Tecnologias";
import Footer from "./components/Footer";

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Bucle de animación para el efecto de retraso suave (Inercia)
    const animate = () => {
      // 0.1 representa la velocidad del delay. Más bajo = más estela y más lento.
      const delay = 0.1;

      currentPos.current.x +=
        (mousePos.current.x - currentPos.current.x) * delay;
      currentPos.current.y +=
        (mousePos.current.y - currentPos.current.y) * delay;

      setCoords({ x: currentPos.current.x, y: currentPos.current.y });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="app-container">
      <div
        className="cursor-glow"
        style={{
          transform: `translate3d(${coords.x - 100}px, ${coords.y - 100}px, 0)`,
        }}
      />

      <Navbar nombre="Jaime" />
      <Hero
        nombre="Jaime"
        rol="Desarrollador Web Junior"
        descripcion="Estudiante de DAM apasionado por el desarrollo web"
      />
      <SobreMi />
      <Tecnologias />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
