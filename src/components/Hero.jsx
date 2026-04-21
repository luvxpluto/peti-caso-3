import FloatingParticles from './FloatingParticles'

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
        <a className="button button-primary" href="#modulos">
          Explorar módulos
        </a>
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
