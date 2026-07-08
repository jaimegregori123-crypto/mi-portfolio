import { useState, useEffect, useRef } from "react";

/* =============================================
   HIRE ME FLOATING BUTTON
   ============================================= */
const HIRE_MAILTO =
  "mailto:jaime.gregori123@gmail.com?subject=Hola%20Jaime,%20me%20interesa%20tu%20perfil&body=Hola,%20he%20visto%20tu%20portfolio%20y..";

function HireMeButton() {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <a
      href={HIRE_MAILTO}
      onClick={handleClick}
      className={`hire-btn ${visible ? "hire-btn--visible" : ""} ${clicked ? "hire-btn--clicked" : ""}`}
      aria-label="Contrátame — abre tu app de correo"
      title="¿Te interesa mi perfil? Escríbeme"
    >
      <span className="hire-btn-icon" aria-hidden="true">
        {clicked ? "✓" : "✉"}
      </span>
      <span className="hire-btn-text">
        {clicked ? "¡Genial!" : "Contrátame"}
      </span>
      <span className="hire-btn-pulse" aria-hidden="true" />
    </a>
  );
}

/* =============================================
   DATA
   ============================================= */

// Front → Back → DevOps/tools — orden que cuenta una historia de full stack
const SKILLS = [
  // Frontend
  "HTML & CSS",
  "JavaScript ES6+",
  "React",
  "Vite",
  // Backend
  "Java",
  "JavaFX",
  "Node.js",
  "REST APIs",
  // Data
  "MySQL",
  "Maven",
  // Tools
  "Git & GitHub",
  "Figma",
];

// Lo que viene en 2º año — se muestra en "aprendiendo ahora"
const LEARNING = [
  "Node.js + Express",
  "TypeScript",
  "PostgreSQL",
  "Spring Boot",
];

const GITHUB_BASE = "https://github.com/jaimegregori123-crypto";

const PROJECTS = [
  {
    id: 1,
    icon: "⚙️",
    title: "FixFlow",
    desc: "Sistema full stack de escritorio para la gestión de activos e incidencias empresariales. Dashboard en tiempo real, autenticación por roles, workflow completo de resolución y base de datos MySQL.",
    tags: ["Java", "JavaFX", "MySQL", "Maven", "JDBC"],
    github:
      "https://github.com/jaimegregori123-crypto/FixFlow_Intermodular.git",
    featured: true,
  },
  {
    id: 2,
    icon: "🌐",
    title: "Portfolio Web",
    desc: "SPA en React con animaciones de scroll vía IntersectionObserver, tema claro/oscuro y despliegue continuo en Vercel.",
    tags: ["React", "Vite", "CSS", "Vercel"],
    github: GITHUB_BASE,
  },
  {
    id: 3,
    icon: "🌤️",
    title: "Weather App",
    desc: "App del tiempo consumiendo API pública REST. Búsqueda por ciudad e iconos dinámicos según condición meteorológica.",
    tags: ["JavaScript", "API REST", "CSS"],
    github: GITHUB_BASE,
  },
  {
    id: 4,
    icon: "✅",
    title: "Task Manager",
    desc: "Gestor de tareas vanilla con LocalStorage para persistencia, filtros por estado y diseño limpio sin frameworks.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: GITHUB_BASE,
  },
];

/* =============================================
   TERMINAL COMPONENT
   ============================================= */
function Terminal() {
  const [lines, setLines] = useState([]);

  const script = [
    { type: "cmd", text: "whoami" },
    { type: "out", text: "jaime — full stack developer", cls: "success" },
    { type: "cmd", text: "cat stack.json" },
    {
      type: "out",
      text: '{ "frontend": ["HTML", "CSS", "JS", "React"] }',
      cls: "accent",
    },
    {
      type: "out",
      text: '{ "backend":  ["Java", "JavaFX", "Node.js"] }',
      cls: "accent",
    },
    {
      type: "out",
      text: '{ "data":     ["MySQL", "REST APIs"] }',
      cls: "accent",
    },
    { type: "cmd", text: "git log --oneline -3" },
    { type: "out", text: "f4a91b  feat: full stack portfolio v3", cls: "" },
    { type: "out", text: "88b4e1  fix: responsive nav mobile", cls: "" },
    { type: "out", text: "c71d0a  feat: FixFlow dashboard live", cls: "" },
    { type: "cmd", text: "echo $STATUS" },
    { type: "out", text: "open to work · Valencia, Spain 🇪🇸", cls: "success" },
  ];

  useEffect(() => {
    let idx = 0;
    const add = () => {
      if (idx >= script.length) return;
      setLines((prev) => [...prev, script[idx++]]);
      setTimeout(add, idx % 2 === 0 ? 600 : 200);
    };
    const t = setTimeout(add, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="terminal" role="region" aria-label="Terminal interactiva">
      <div className="terminal-bar">
        <div className="terminal-dot r" aria-hidden="true" />
        <div className="terminal-dot y" aria-hidden="true" />
        <div className="terminal-dot g" aria-hidden="true" />
        <span className="terminal-title">jaime@portfolio — zsh</span>
      </div>
      <div className="terminal-body" aria-live="polite">
        {lines.map((l, i) =>
          l.type === "cmd" ? (
            <div className="t-line" key={i}>
              <span className="t-prompt" aria-hidden="true">
                ❯
              </span>
              <span className="t-cmd">{l.text}</span>
            </div>
          ) : (
            <div className="t-line" key={i}>
              <span className={`t-out ${l.cls}`}>{l.text}</span>
            </div>
          ),
        )}
        <div className="t-line" aria-hidden="true">
          <span className="t-prompt">❯</span>
          <span className="t-cursor" />
        </div>
      </div>
    </div>
  );
}

/* =============================================
   APP MOCKUP (for FixFlow featured)
   ============================================= */
function AppMockup() {
  return (
    <div className="app-mock" aria-hidden="true">
      <div className="app-mock-bar">
        <div className="app-mock-dots">
          <span className="app-mock-dot r" />
          <span className="app-mock-dot y" />
          <span className="app-mock-dot g" />
        </div>
        <span className="app-mock-name">FixFlow — Dashboard</span>
      </div>
      <div className="app-mock-body">
        <div className="app-mock-sidebar">
          <div className="sb-item active" />
          <div className="sb-item" />
          <div className="sb-item" />
          <div className="sb-item" />
        </div>
        <div className="app-mock-main">
          <div className="mock-stat-row">
            <div className="mock-stat">
              <div className="mock-stat-n">24</div>
              <div className="mock-stat-l">Activos</div>
            </div>
            <div className="mock-stat">
              <div className="mock-stat-n">7</div>
              <div className="mock-stat-l">Incidencias</div>
            </div>
            <div className="mock-stat accent">
              <div className="mock-stat-n">3</div>
              <div className="mock-stat-l">Resueltas</div>
            </div>
          </div>
          <div className="mock-rows">
            {[1, 2, 3, 4].map((i) => (
              <div className="mock-row-item" key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================
   CARD GLOW HOOK
   ============================================= */
function useCardGlow(ref) {
  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    const glow = card.querySelector(".card-glow");
    const move = (e) => {
      const r = card.getBoundingClientRect();
      if (glow) {
        glow.style.left = e.clientX - r.left + "px";
        glow.style.top = e.clientY - r.top + "px";
      }
    };
    card.addEventListener("mousemove", move);
    return () => card.removeEventListener("mousemove", move);
  }, []);
}

function ProjectCard({ project }) {
  const ref = useRef(null);
  useCardGlow(ref);
  return (
    <article className="project-card" ref={ref} aria-label={project.title}>
      <div className="card-glow" aria-hidden="true" />
      <div className="proj-card-top">
        <span className="proj-icon" aria-hidden="true">
          {project.icon}
        </span>
        <a
          href={project.github}
          className="proj-link-icon"
          aria-label={`Ver ${project.title} en GitHub`}
        >
          ↗
        </a>
      </div>
      <h3 className="proj-title">{project.title}</h3>
      <p className="proj-desc">{project.desc}</p>
      <div className="proj-tags">
        {project.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

/* =============================================
   INTERSECTION OBSERVER HOOK
   ============================================= */
function useVisible(threshold = 0.4) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* =============================================
   MAIN APP
   ============================================= */
export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Active section tracking
  useEffect(() => {
    const secs = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.35 },
    );
    secs.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const navItems = [
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ];

  const featured = PROJECTS.find((p) => p.featured);
  const minor = PROJECTS.filter((p) => !p.featured);

  // Visibility refs for sections
  const [aboutRef, aboutVisible] = useVisible(0.2);
  const [projRef, projVisible] = useVisible(0.1);
  const [ctaRef, ctaVisible] = useVisible(0.3);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="navbar" role="banner">
        <div className="navbar-inner">
          <a href="#inicio" className="nav-logo" aria-label="Inicio">
            <span>jaime</span>
            <span className="nav-logo-dot" aria-hidden="true">
              ●
            </span>
            <span>dev</span>
          </a>

          <nav className="nav-links" aria-label="Navegación principal">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={active === href.slice(1) ? "active" : ""}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <div className="nav-badge" aria-label="Disponible para trabajo">
              <span className="badge-dot" aria-hidden="true" />
              open to work
            </div>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              className={`nav-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menú"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? "open" : ""}`}
          aria-label="Menú móvil"
        >
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section id="inicio" className="hero section" aria-label="Presentación">
          <div className="container">
            <div className="hero-inner">
              <div
                className="hero-tag"
                aria-label="Estado: disponible para trabajo"
              >
                <span className="hero-tag-dot" aria-hidden="true" />
                Full Stack Developer · Open to work
              </div>
              <h1 className="hero-title">
                Del frontend
                <br />
                al <em>backend.</em>
              </h1>
              <p className="hero-sub">
                Desarrollo aplicaciones web completas, de la interfaz a la base
                de datos. Aprendo rápido, diseño con intención y escribo código
                del que no me arrepiento.
              </p>
              <div className="hero-cta">
                <a href="#proyectos" className="btn-primary">
                  Ver proyectos →
                </a>
                <a href="#contacto" className="btn-secondary">
                  Hablemos
                </a>
              </div>
              <Terminal />
            </div>
          </div>
        </section>

        {/* ===== SOBRE MÍ ===== */}
        <section
          id="sobre-mi"
          className="section"
          ref={aboutRef}
          style={{
            opacity: aboutVisible ? 1 : 0,
            transform: aboutVisible ? "none" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
          aria-labelledby="about-heading"
        >
          <div className="container">
            <span className="section-label">Sobre mí</span>
            <div className="about-grid">
              <div className="about-text">
                <h2 id="about-heading" className="about-heading">
                  Hola, soy Jaime.
                  <br />
                  Construyo de arriba abajo.
                </h2>
                <p>
                  Estudio DAM en Prometeo by The Power FP (Valencia). Este
                  primer año he trabajado tanto en interfaces como en backend
                  con Java y MySQL — y en 2º me especializo en Full Stack para
                  cerrar el círculo.
                </p>
                <p>
                  Busco mi primer rol como desarrollador: un equipo donde pueda
                  aportar desde el primer día y seguir creciendo. Si construyes
                  producto y buscas a alguien con hambre, hablemos.
                </p>
                <div
                  className="skills-grid"
                  role="list"
                  aria-label="Tecnologías"
                >
                  {SKILLS.map((s) => (
                    <div className="skill-chip" role="listitem" key={s}>
                      <span className="skill-chip-dot" aria-hidden="true" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div className="about-card">
                <div className="about-stats" aria-label="Estadísticas">
                  <div className="stat">
                    <div className="stat-num">10+</div>
                    <div className="stat-label">proyectos</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">FS</div>
                    <div className="stat-label">full spack</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">VLC</div>
                    <div className="stat-label">España</div>
                  </div>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-3)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    // próximo en el roadmap
                  </p>
                  {LEARNING.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.6rem 0",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                        }}
                      >
                        →
                      </span>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-2)",
                          fontWeight: 300,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROYECTOS ===== */}
        <section
          id="proyectos"
          className="section"
          ref={projRef}
          style={{
            opacity: projVisible ? 1 : 0,
            transform: projVisible ? "none" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
          aria-labelledby="proj-heading"
        >
          <div className="container">
            <span className="section-label">Proyectos</span>
            <div className="projects-header">
              <h2 id="proj-heading" className="section-heading">
                Trabajo seleccionado
              </h2>
              <a
                href="https://github.com/jaimegregori123-crypto"
                target="_blank"
                rel="noopener noreferrer"
                className="view-all"
                aria-label="Ver todos los proyectos en GitHub"
              >
                Ver todos en GitHub →
              </a>
            </div>

            {/* Proyecto destacado */}
            {featured && (
              <div
                className="project-featured"
                aria-label={`${featured.title} — proyecto destacado`}
              >
                <div className="proj-feat-content">
                  <div
                    className="proj-feat-badge"
                    aria-label="Proyecto destacado"
                  >
                    ★ Featured
                  </div>
                  <h3 className="proj-feat-title">{featured.title}</h3>
                  <p className="proj-feat-desc">{featured.desc}</p>
                  <div className="proj-tags">
                    {featured.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="proj-feat-links">
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      aria-label={`Ver ${featured.title} en GitHub`}
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
                <div className="proj-feat-visual" aria-hidden="true">
                  <AppMockup />
                </div>
              </div>
            )}

            {/* Grid proyectos menores */}
            <div className="projects-grid">
              {minor.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACTO ===== */}
        <section
          id="contacto"
          className="section"
          ref={ctaRef}
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "none" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <span className="section-label">Contacto</span>
            <div className="contact-inner">
              <div>
                <h2 id="contact-heading" className="contact-heading">
                  ¿Empezamos
                  <br />
                  <em>algo juntos?</em>
                </h2>
                <p className="contact-text">
                  Busco mi primer rol como desarrollador full stack. Abierto a
                  proyectos, posiciones junior y cualquier oportunidad
                  interesante. Respondo en menos de 24h.
                </p>
                <address>
                  <a
                    href="mailto:jaime.gregori123@gmail.com"
                    className="contact-email-link"
                    aria-label="Enviar email a Jaime"
                  >
                    jaime.gregori123@gmail.com ↗
                  </a>
                </address>
                <div
                  className="social-row"
                  role="list"
                  aria-label="Redes sociales"
                >
                  {[
                    {
                      label: "GitHub",
                      href: "https://github.com/jaimegregori123-crypto",
                    },
                    {
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/jaime-gregori-563183310/",
                    },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-chip"
                      role="listitem"
                      aria-label={`Perfil de ${label}`}
                    >
                      {label} ↗
                    </a>
                  ))}
                </div>
              </div>
              <form
                className="contact-form"
                action="#"
                method="post"
                noValidate
                aria-label="Formulario de contacto"
              >
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntame tu proyecto..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Enviar →
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FLOATING HIRE BUTTON ===== */}
      <HireMeButton />

      {/* ===== FOOTER ===== */}
      <footer className="footer" role="contentinfo">
        <div className="footer-inner">
          <p className="footer-copy">
            © 2026 Jaime. Todos los derechos reservados.
          </p>
          <nav className="footer-links" aria-label="Redes sociales">
            <a
              href="https://github.com/jaimegregori123-crypto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jaime-gregori-563183310/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
