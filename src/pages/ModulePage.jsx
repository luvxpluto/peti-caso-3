import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ModelIcon from '../components/ModelIcon'
import ModelNavigation from '../components/ModelNavigation'
import SectionBlock from '../components/SectionBlock'
import StepProgress from '../components/StepProgress'
import { getAdjacentModels, modelsById } from '../data/models'
import NotFoundPage from './NotFoundPage'

function ModulePage() {
  const { modelSlug } = useParams()
  const model = modelsById[modelSlug]

  if (!model) {
    return <NotFoundPage />
  }

  const { previous, next } = getAdjacentModels(model.id)

  return (
    <article className="page module-page">
      <div className="container">
        <Breadcrumb current={model.shortName} />

        <header className="module-hero reveal">
          <div className="module-title-group">
            <div className="card-icon-wrap module-icon">
              <ModelIcon name={model.icon} />
            </div>
            <div>
              <p className="eyebrow">{model.organization}</p>
              <h1>{model.name}</h1>
            </div>
          </div>
          <a className="button button-primary" href={model.sourceUrl} target="_blank" rel="noreferrer">
            Fuente Google Docs
          </a>
        </header>

        <SectionBlock eyebrow="01" title="Propósito">
          <div className="content-panel">
            <p>{model.purpose}</p>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="02" title="Dimensiones de análisis">
          <div className="dimension-grid">
            {model.dimensions.map((dimension, index) => (
              <div className="dimension-item" key={dimension}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{dimension}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="03" title="Niveles de madurez">
          <StepProgress levels={model.maturityLevels} />
        </SectionBlock>

        <SectionBlock eyebrow="04" title="Aplicación práctica (AS-IS / TO-BE)">
          <div className="split-grid">
            <div className="state-card">
              <p className="eyebrow">AS-IS</p>
              <h3>Estado actual</h3>
              <p>{model.asIs}</p>
            </div>
            <div className="state-card state-card-highlight">
              <p className="eyebrow">TO-BE</p>
              <h3>Estado objetivo</h3>
              <p>{model.toBe}</p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="05" title="Uso dentro del PETI">
          <div className="content-panel">
            <p>{model.petiUse}</p>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="06" title="Ventajas, Limitaciones y Contexto ideal">
          <div className="insight-grid">
            <article className="insight-card">
              <ModelIcon name="check" />
              <h3>Ventajas</h3>
              <p>{model.advantages}</p>
            </article>
            <article className="insight-card">
              <ModelIcon name="limit" />
              <h3>Limitaciones</h3>
              <p>{model.limitations}</p>
            </article>
            <article className="insight-card">
              <ModelIcon name="target" />
              <h3>Contexto ideal</h3>
              <p>{model.idealContext}</p>
            </article>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="07" title="Video explicativo">
          <div className="video-shell">
            <iframe
              title={`Video explicativo de ${model.shortName}`}
              src={model.videoUrl}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="video-note">[PLACEHOLDER] Reemplazar el src del iframe en el archivo de datos.</p>
        </SectionBlock>

        <ModelNavigation previous={previous} next={next} />

        <div className="return-row">
          <Link to="/comparacion">Ir a comparación de modelos</Link>
        </div>
      </div>
    </article>
  )
}

export default ModulePage
