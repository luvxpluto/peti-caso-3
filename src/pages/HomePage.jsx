import Hero from '../components/Hero'
import ModuleCard from '../components/ModuleCard'
import SectionBlock from '../components/SectionBlock'
import { models } from '../data/models'

function HomePage() {
  return (
    <>
      <Hero />

      <section id="modulos" className="page-section modules-section">
        <div className="container">
          <SectionBlock
            eyebrow="Modelos de referencia"
            title="Seis enfoques para diagnosticar, comparar y priorizar madurez digital"
            className="section-block-compact"
          >
            <p className="section-lead">
              [PLACEHOLDER] Texto introductorio para explicar cómo se usarán estos módulos
              como insumo para el análisis AS-IS, definición TO-BE y construcción del PETI.
            </p>
          </SectionBlock>

          <div className="modules-grid">
            {models.map((model) => (
              <ModuleCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
