import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-nombre">Jaime</p>
        <p className="footer-texto">
          Desarrollador Web Junior · Valencia, España
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/jaimegregori123-crypto"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:jaime.gregori123@gmail.com">
            <MdEmail />
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Jaime · Hecho con React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
