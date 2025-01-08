import styles from "./Projetos.module.css";

function Projetos() {
  return (
    <section id="projetos" className={styles.projetos}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      <h1>
        <u>Projetos (em desenvolvimento)</u>
      </h1>
      <p>
        <i className="fab fa-react"></i> React Native:
      </p>
      <p>
        <img src="/img/react_native_1.jpeg" alt="react_native_1" />
        <img src="/img/react_native_2.jpeg" alt="react_native_2" />
        <img src="/img/react_native_3.jpeg" alt="react_native_3" />
        <img src="/img/react_native_4.jpeg" alt="react_native_4" />
      </p>
    </section>
  );
}

export default Projetos;
