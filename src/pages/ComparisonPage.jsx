import ComparisonTable from '../components/ComparisonTable'
import SelectionCard from '../components/SelectionCard'
import SectionBlock from '../components/SectionBlock'
import { comparisonCriteria, comparisonInsights, comparisonIntro } from '../data/comparison'
import { models } from '../data/models'

function ComparisonPage() {
  return (
    <article className="page comparison-page">
      <div className="container">
        <header className="page-header reveal">
          <p className="eyebrow">Comparación estratégica</p>
          <h1>Comparación de modelos de madurez digital</h1>
          <p>{comparisonIntro}</p>
        </header>

        <SectionBlock eyebrow="01" title="Tabla comparativa">
          <ComparisonTable models={models} criteria={comparisonCriteria} />
        </SectionBlock>

        <SectionBlock eyebrow="02" title="Lectura estratégica">
          <div className="insight-grid">
            {comparisonInsights.map((insight) => (
              <article key={insight.title} className="insight-card reveal">
                <p className="eyebrow">Hallazgo clave</p>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="03" title="Criterios de selección">
          <div className="selection-grid">
            {models.map((model) => (
              <SelectionCard key={model.id} model={model} />
            ))}
          </div>
        </SectionBlock>
      </div>
    </article>
  )
}

export default ComparisonPage
