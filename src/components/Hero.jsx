import FloatingParticles from './FloatingParticles'
import { caseContextUrl, caseSolutionUrl } from '../data/models'

function Hero() {
  return (
    <section className="hero-section">
      <FloatingParticles />
      <div className="container hero-content">
        <div className="hero-kicker">Transformación Digital · Planificación Estratégica · PETI</div>
        <h1>Plataforma de Modelos de Madurez Digital</h1>
        <p>
          Un entorno visual para comparar, explorar y preparar modelos de madurez digital
          como insumo estratégico para la construcción de un PETI.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#modulos">
            Explorar módulos
          </a>
          <a
            className="button button-secondary"
            href={caseContextUrl}
            target="_blank"
            rel="noreferrer"
          >
            Contexto del caso práctico
          </a>
          <a
            className="button button-muted"
            href={caseSolutionUrl}
            target="_blank"
            rel="noreferrer"
          >
            Solución de caso práctico
          </a>
        </div>
      </div>
      <div className="hero-orbital" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  )
}

export default Hero
