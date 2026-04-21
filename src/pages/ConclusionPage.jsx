import { Link } from 'react-router-dom'
import SectionBlock from '../components/SectionBlock'

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
          <h2 id="question-title">
            ¿Qué modelo o combinación de modelos utilizarían como base para construir un PETI y por qué?
          </h2>
        </section>

        <SectionBlock eyebrow="Respuesta editable" title="Conclusión estratégica">
          <div className="conclusion-panel">
            <p>
              [PLACEHOLDER] Redactar aquí la conclusión estratégica. Indicar el modelo
              principal seleccionado, los modelos complementarios, los criterios usados para
              justificar la selección y cómo la combinación aporta al diagnóstico AS-IS,
              al diseño TO-BE, al portafolio de iniciativas y al gobierno del PETI.
            </p>
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
