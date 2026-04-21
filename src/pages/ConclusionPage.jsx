import { Link } from 'react-router-dom'
import SectionBlock from '../components/SectionBlock'
import {
  conclusionClosing,
  conclusionIntro,
  conclusionQuestion,
  conclusionReasons,
  conclusionRecommendation,
} from '../data/comparison'
import { models } from '../data/models'

function ConclusionPage() {
  return (
    <article className="page conclusion-page">
      <div className="container">
        <header className="page-header reveal">
          <p className="eyebrow">Conclusión estratégica</p>
          <h1>Modelo base para la construcción del PETI</h1>
        </header>

        <section className="highlight-question reveal" aria-labelledby="question-title">
          <p className="eyebrow">Pregunta guía</p>
          <h2 id="question-title">{conclusionQuestion}</h2>
        </section>

        <SectionBlock eyebrow="01" title="Conclusión estratégica">
          <div className="conclusion-panel">
            <p>{conclusionIntro}</p>
            <p className="conclusion-emphasis">{conclusionRecommendation}</p>
            <p>{conclusionClosing}</p>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="02" title="Rol de cada modelo en la base del PETI">
          <div className="insight-grid">
            {conclusionReasons.map((reason) => {
              const model = models.find((item) => item.id === reason.modelId)

              return (
                <article key={reason.title} className="insight-card reveal">
                  <p className="eyebrow">{model?.shortName ?? 'Modelo recomendado'}</p>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              )
            })}
          </div>
        </SectionBlock>

        <div className="return-row">
          <Link className="button button-secondary" to="/comparacion">
            Volver a comparación
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ConclusionPage
