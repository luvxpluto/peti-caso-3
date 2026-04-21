function ComparisonTable({ models }) {
  return (
    <div className="table-shell" tabIndex="0" aria-label="Tabla comparativa con desplazamiento horizontal">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Organización</th>
            <th>Nº de niveles</th>
            <th>Dimensiones clave</th>
            <th>Enfoque principal</th>
            <th>Ideal para</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.id}>
              <th scope="row">{model.shortName}</th>
              <td>{model.organization}</td>
              <td>{model.levelsCount}</td>
              <td>{model.keyDimensions}</td>
              <td>{model.mainFocus}</td>
              <td>{model.idealFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
