import { Link } from 'react-router-dom'
import ModelIcon from './ModelIcon'

function SelectionCard({ model }) {
  return (
    <article className="selection-card reveal">
      <ModelIcon name={model.icon} />
      <div>
        <p className="eyebrow">¿Cuándo usar este modelo?</p>
        <h3>{model.shortName}</h3>
        <p>{model.selectionCriteria}</p>
      </div>
      <Link to={model.route}>Revisar módulo</Link>
    </article>
  )
}

export default SelectionCard
