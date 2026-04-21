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
