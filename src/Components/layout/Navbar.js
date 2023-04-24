import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.css";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

function Navbar() {
  return (
    <header>
      <nav id={styles.navPortfolio}>
        <ul id={styles.listaCabecalho}>
          <li className={styles.itemCabecalho}>
            <HashLink
              smooth
              to="/#competencias"
              className={styles.hover_underline_animation}
            >
              Competências
            </HashLink>
          </li>
          <li className={styles.itemCabecalho}>
            <HashLink
              smooth
              to="/#projetos"
              className={styles.hover_underline_animation}
            >
              Projetos
            </HashLink>
          </li>
          <li className={styles.itemCabecalho}>
            <HashLink
              smooth
              to="/#sobreMim"
              className={styles.hover_underline_animation}
            >
              Sobre mim
            </HashLink>
          </li>
          <li className={styles.itemCabecalho}>
            <HashLink
              smooth
              to="/#inicio"
              className={styles.hover_underline_animation}
            >
              Início
            </HashLink>
          </li>
          <li id={styles.bemvindo} className={styles.itemCabecalho}>
            <a href="/" className={styles.hover_underline_animation}>
              Bem-vindo!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
