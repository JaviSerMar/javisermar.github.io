function AboutWindow({ window, closeWindow }) {
  return (
    <div className="about-window-content">
      <header className="about-frame-header">
        <div className="about-frame-icon">
          <img
            src="/images/iconoAbout.png"
            alt=""
            draggable="false"
          />
        </div>

        <div className="about-frame-tab">CÓDIGO</div>
        <div className="about-frame-tab">INTERACCIÓN</div>
        <div className="about-frame-tab">DISPOSITIVOS</div>
        <div className="about-frame-tab">VISIÓN</div>

        <div className="about-frame-tab about-frame-tab-wide">
          PROYECTOS
        </div>

        <div className="about-frame-file">
          sobre_mi.TXT
        </div>

        <a
          className="about-frame-mail"
          href="mailto:javiersemarco@gmail.com"
          aria-label="Enviar correo"
          onPointerDown={(event) => event.stopPropagation()}
        >
          ✉
        </a>

        <button
          className="about-frame-close"
          type="button"
          aria-label="Cerrar"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => closeWindow(window.id)}
        >
          ×
        </button>
      </header>

      <section className="about-info-strip">
        <div className="about-profile-block">
          <div className="about-profile-image">
            <img
              src="/images/frank.png"
              alt="Javier Serrano"
              draggable="false"
            />
          </div>

          <div className="about-profile-copy">
            <h1>JAVIER SERRANO</h1>

            <p>
              Graduado en Tecnologías Interactivas. Trabajo entre
              programación, electrónica e interacción, desarrollando
              soluciones que conectan software y sistemas físicos.
            </p>
          </div>
        </div>

        <div className="about-arrow-cell">
          →
        </div>

        <div className="about-info-cell">
          <span className="about-info-title">
            QUÉ HAGO
          </span>

          <p>
            Convierto ideas en prototipos y sistemas funcionales,
            desde la interfaz y la lógica del software hasta su
            integración con dispositivos y sensores.
          </p>
        </div>

        <div className="about-info-cell about-areas">
          <span className="about-info-title">
            ÁREAS
          </span>

          <p>
            Desarrollo de software
            <br />
            IoT
            <br />
            Robótica
            <br />
            Automatización
            <br />
            Visión artificial
          </p>

          <img
            className="about-profile-mark"
            src="/images/iconoAbout4.png"
            alt=""
            draggable="false"
          />
        </div>

        <div className="about-info-cell about-interests">
          <span className="about-info-title">
            INTERESES
          </span>

          <p>
            Entender cómo funcionan las cosas, desmontarlas mentalmente
            y encontrar una forma mejor de hacerlas.
          </p>
        </div>

        <div className="about-info-cell about-current">
          <span className="about-info-title">
            ACTUALMENTE
          </span>

          <p>
            Actualmente realizo prácticas en Grupo Ubesol como auxiliar
            de sistemas.
          </p>
        </div>
      </section>

      <section className="about-landscape">
        <img
          src="/images/paisajeAbout2.png"
          alt="Paisaje pixel art"
          draggable="false"
        />

        <div className="about-landscape-copy">
          <span>
            LAS COSAS
            <br />
            FUNCIONAN
            <br />
            MEJOR JUNTAS
          </span>

          <i>—</i>
        </div>
      </section>

      <section className="about-bottom-grid">
        <div className="about-work-block">
          <span className="about-bottom-heading">
            EN QUÉ TRABAJO
          </span>

          <div className="about-work-diagram">
            <div className="about-work-labels">
              <span>AUTOMATIZAR</span>
              <span>CONECTAR</span>
              <span>PROTOTIPAR</span>
              <span>OPTIMIZAR</span>
            </div>

            <svg
              className="about-work-lines"
              viewBox="0 0 190 92"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 10 H92 C125 10 132 42 178 46" />
              <path d="M0 34 H96 C127 34 139 44 178 46" />
              <path d="M0 58 H96 C127 58 139 48 178 46" />
              <path d="M0 82 H92 C125 82 132 50 178 46" />

              <circle cx="181" cy="46" r="6" />
            </svg>
          </div>
        </div>

        <div className="about-footer-image about-footer-image-red">
          <img
            src="/images/imagenAbout5.png"
            alt=""
            draggable="false"
          />
        </div>

        <div className="about-contact-block">
          <span className="about-bottom-heading">
            CONTACTO
          </span>

          <div className="about-contact-list">
            <a
              href="mailto:javiersemarco@gmail.com"
              onPointerDown={(event) => event.stopPropagation()}
            >
              <span className="about-contact-number">01</span>
              <span className="about-contact-label">EMAIL</span>
              <span className="about-contact-arrow">↗</span>
            </a>

            <a
              href="https://github.com/JaviSerMar"
              target="_blank"
              rel="noreferrer"
              onPointerDown={(event) => event.stopPropagation()}
            >
              <span className="about-contact-number">02</span>
              <span className="about-contact-label">GITHUB</span>
              <span className="about-contact-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/javier-serrano-marco-800167409/"
              target="_blank"
              rel="noreferrer"
              onPointerDown={(event) => event.stopPropagation()}
            >
              <span className="about-contact-number">03</span>
              <span className="about-contact-label">LINKEDIN</span>
              <span className="about-contact-arrow">↗</span>
            </a>

            <div className="about-contact-cv">
              <span className="about-contact-number">04</span>
              <span className="about-contact-label">CV</span>
              <span className="about-contact-arrow">↓</span>
            </div>
          </div>
        </div>

        <div className="about-footer-image about-footer-image-blue">
          <img
            src="/images/imagenAbout7.png"
            alt=""
            draggable="false"
          />
        </div>

        <div className="about-footer-image about-footer-image-yellow">
          <img
            src="/images/imagenAbout8.png"
            alt=""
            draggable="false"
          />
        </div>
      </section>

      <footer className="about-footer">
        <span>
          <i>■</i>
          HECHO CON CURIOSIDAD
        </span>

        <span>
          PORTFOLIO 2026
          <i>■</i>
        </span>
      </footer>
    </div>
  );
}

export default AboutWindow;