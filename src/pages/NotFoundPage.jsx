import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page not-found-page">
      <div className="container page-header">
        <p className="eyebrow">404</p>
        <h1>Página no encontrada</h1>
        <p>La ruta solicitada no existe dentro de la plataforma.</p>
        <Link className="button button-primary" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
