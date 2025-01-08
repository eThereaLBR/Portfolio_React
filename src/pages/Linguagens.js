import styles from "./Linguagens.module.css";

function Linguagens() {
  return (
    <section id="linguagens" className={styles.linguagens}>
      <h1>
        <u>Linguagens</u>
      </h1>
      <p>
        Como Programador Full Stack, tenho experiência nas seguintes linguagens
        e ferramentas:
      </p>

      <h2>Front-end</h2>
      <ul>
        <li>HTML</li>
        <br />
        <li>JavaScript</li>
        <br />
        <li>CSS</li>
        <br />
        <li>JQuery</li>
        <br />
        <li>Bootstrap</li>
        <br />
        <li>ReactJS</li>
        <br />
        <li>React Native</li>
        <br />
        <li>Ajax</li>
        <br />
        <li>JSON</li>
      </ul>

      <h2>Back-end</h2>
      <ul>
        <li>PHP</li>
        <br />
        <li>Zend Framework</li>
      </ul>

      <h2>Banco de Dados</h2>
      <ul>
        <li>MySQL</li>
      </ul>
    </section>
  );
}

export default Linguagens;
