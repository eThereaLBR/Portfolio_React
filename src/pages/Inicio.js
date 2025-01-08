import styles from "./Inicio.module.css";
import MinhaFoto from "../images/minha_foto.png";
import { FaFacebook } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

function Inicio() {
  return (
    <main id="inicio" className={styles.inicio}>
      <div className={styles.divInicio}>
        <p>Olá! Me chamo</p>
        <h1>Gabriel Silvestre</h1>
        <p>
          e sou <u>Desenvolvedor.</u>*
        </p>
        <h4>
          * Portfólio desenvolvido com a biblioteca <u>ReactJs.</u>
        </h4>
        {/* <FaFacebook />
        <VscGithub /> */}
        <img id={styles.minhaFoto} src={MinhaFoto} alt="minha_foto" />
      </div>
    </main>
  );
}

export default Inicio;
