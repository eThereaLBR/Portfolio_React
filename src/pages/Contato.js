import styles from "./Contato.module.css";

function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>

      <h1>
        <u>Contato</u>
      </h1>
      <p>
        <ul style={{ listStyle: "none" }}>
          <li>
            <i class="fas fa-envelope"></i> Meu e-mail:
            gabriel.silvestre0127@gmail.com
          </li>
          <br />
          <li>
            <i class="fab fa-whatsapp"></i> Meu WhatsApp:&nbsp;
            <a
              style={{ color: "gray" }}
              href="https://web.whatsapp.com/send?phone=5514997414321&text=Olá!%20Gostaria%20de%20falar%20com%20você%20a%20respeito%20de%20seu%20currículo."
              target="_blank"
            >
              Clique aqui
            </a>
            &nbsp;para falar comigo no WhatsApp
          </li>
          <br />
          <li>
            <i class="fas fa-file-pdf"></i> Currículo:&nbsp;
            <a
              style={{ color: "gray" }}
              href="/Gabriel_Silvestre_CV.pdf"
              download="Gabriel_Silvestre_CV.pdf"
            >
              Clique aqui
            </a>
            &nbsp;para baixar o PDF do meu Curriculum Vitae
          </li>
          <br />
          <li>
            <i class="fab fa-linkedin"></i> Linkedin:&nbsp;
            <a
              style={{ color: "gray" }}
              href="https://www.linkedin.com/in/gabriel-silvestre-907192142/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui
            </a>
            &nbsp;para acessar meu perfil no Linkedin
          </li>
          <br />
          <li>
            <i class="fab fa-github"></i> GitHub:&nbsp;
            <a
              style={{ color: "gray" }}
              href="https://github.com/eThereaLBR"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui
            </a>
            &nbsp;para acessar meu GitHub
          </li>
          <br />
          <li>
            <i class="fas fa-laptop"></i> Portfólio de jogos:&nbsp;
            <a
              style={{ color: "gray" }}
              href="https://gabrielsilvestreportfolio.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui
            </a>
            &nbsp;para acessar meu portfólio de jogos
          </li>
        </ul>
      </p>
    </section>
  );
}

export default Contato;
