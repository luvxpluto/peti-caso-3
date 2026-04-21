import ComparisonTable from '../components/ComparisonTable'
import SelectionCard from '../components/SelectionCard'
import SectionBlock from '../components/SectionBlock'
import { models } from '../data/models'

function ComparisonPage() {
  return (
    <article className="page">
      <div className="container">
        <header className="page-header reveal">
          <p className="eyebrow">Comparación estratégica</p>
          <h1>Comparación de modelos de madurez digital</h1>
          <p>
            [PLACEHOLDER] Introducción editable para explicar los criterios de comparación
            y la lógica de selección dentro del PETI.
          </p>
        </header>

        <SectionBlock eyebrow="01" title="Tabla comparativa">
          <ComparisonTable models={models} />
        </SectionBlock>

        <SectionBlock eyebrow="02" title="Criterios de selección">
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
