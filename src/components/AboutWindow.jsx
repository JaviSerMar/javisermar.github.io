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
              Graduado en Tecnologías Interactivas.
              Construyo proyectos donde el código conecta con
              aplicaciones, dispositivos, sensores y sistemas
              de visión por computación.
            </p>
          </div>
        </div>

        <div className="about-arrow-cell">
          →
        </div>

        <div className="about-info-cell">
          <span className="about-info-title">
            ACTUALMENTE
          </span>

          <p>
            Buscando nuevas oportunidades para seguir
            construyendo ideas.
          </p>
        </div>

        <div className="about-info-cell about-profile-description">
          <span className="about-info-title">
            PERFIL
          </span>

          <p>
            Desarrollo de software interactivo con enfoque
            en IoT, sistemas embebidos y visión por
            computador.
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
            Desarrollo de software
            <br />
            Sistemas interactivos
            <br />
            IoT y sistemas embebidos
            <br />
            Visión por computador
            <br />
            Robótica
          </p>
        </div>

        <div className="about-motto-cell">
          <p>
            MISMAS
            <br />
            IDEAS
            <br />
            DISTINTOS
            <br />
            MEDIOS
          </p>

          <span>■</span>
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
        <div className="about-signature-block">
          <strong>
            JAVIER
            <br />
            SERRANO
          </strong>

          <div className="about-signature-pattern">
            × × ×
            <br />
            × × ×
          </div>

          <span>2026</span>
        </div>

        <div className="about-development-block">
          <div className="about-development-art">
            <img
              src="/images/iconoAbout4.png"
              alt=""
              draggable="false"
            />
          </div>

          <p>
            IDEAS
            <br />
            EN DESARROLLO
          </p>
        </div>

        <div className="about-links-block">
          <a
            href="mailto:javiersemarco@gmail.com"
            onPointerDown={(event) => event.stopPropagation()}
          >
            <span>EMAIL</span>
            <span>↗</span>
          </a>

          <a
            href="https://github.com/JaviSerMar"
            target="_blank"
            rel="noreferrer"
            onPointerDown={(event) => event.stopPropagation()}
          >
            <span>GITHUB</span>
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/javier-serrano-marco-800167409/"
            target="_blank"
            rel="noreferrer"
            onPointerDown={(event) => event.stopPropagation()}
          >
            <span>LINKEDIN</span>
            <span>↗</span>
          </a>

          <div className="about-link-static">
            <span>CV</span>
            <span>↗</span>
          </div>
        </div>

        <div className="about-projects-block">
          <span className="about-bottom-title">
            PROYECTOS DESTACADOS
          </span>

          <div className="about-projects-row">
            <div className="about-project-card">
              <div className="about-project-image">
                <img
                  src="/projects/velaris/foto1Velaris.png"
                  alt="Velaris"
                  draggable="false"
                />
              </div>

              <div className="about-project-copy">
                <strong>VELARIS</strong>

                <p>
                  Robot de vigilancia móvil con visión
                  artificial y control web.
                </p>

                <span>→</span>
              </div>
            </div>

            <div className="about-project-card">
              <div className="about-project-image about-project-dw">
                <img
                  src="/icons/iconoDigitalWardrobe.png"
                  alt="Digital Wardrobe"
                  draggable="false"
                />
              </div>

              <div className="about-project-copy">
                <strong>ARMARIO DIGITAL</strong>

                <p>
                  Aplicación web para gestionar un armario
                  digital de forma inteligente.
                </p>

                <span>→</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-technology-block">
          <img
            src="/images/iconoAbout4.png"
            alt=""
            draggable="false"
          />

          <p>
            TECNOLOGÍA
            <br />
            PARA
            <br />
            PERSONAS
            <br />
            REALES
          </p>

          <span>■</span>
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