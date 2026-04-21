import { Link } from 'react-router-dom'

function Breadcrumb({ current }) {
  return (
    <nav className="breadcrumb" aria-label="Ruta de navegación">
      <Link to="/">Inicio</Link>
      <span aria-hidden="true">&gt;</span>
      <span>Modelos</span>
      <span aria-hidden="true">&gt;</span>
      <span aria-current="page">{current}</span>
    </nav>
  )
}

export default Breadcrumb
