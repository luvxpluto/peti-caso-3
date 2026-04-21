import { Link } from 'react-router-dom'
import ModelIcon from './ModelIcon'

function ModuleCard({ model }) {
  return (
    <article className="module-card reveal">
      <div className="card-icon-wrap">
        <ModelIcon name={model.icon} />
      </div>
      <div>
        <p className="eyebrow">{model.organization}</p>
        <h3>{model.shortName}</h3>
        <p>{model.cardDescription}</p>
      </div>
      <Link className="button button-secondary" to={model.route}>
        Ver Módulo
      </Link>
    </article>
  )
}

export default ModuleCard
