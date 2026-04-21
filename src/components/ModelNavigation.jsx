import { Link } from 'react-router-dom'

function ModelNavigation({ previous, next }) {
  return (
    <nav className="model-navigation" aria-label="Navegación entre modelos">
      {previous ? (
        <Link className="button button-muted" to={previous.route}>
          ← Anterior
        </Link>
      ) : (
        <span />
      )}
      <Link className="button button-secondary" to="/">
        Volver al inicio
      </Link>
      {next ? (
        <Link className="button button-muted" to={next.route}>
          Siguiente →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}

export default ModelNavigation
