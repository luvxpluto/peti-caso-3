function ComparisonTable({ models, criteria }) {
  return (
    <div className="table-shell" tabIndex="0" aria-label="Tabla comparativa de modelos">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Criterio</th>
            {models.map((model) => (
              <th key={model.id}>{model.shortName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criteria.map((item) => (
            <tr key={item.criterion}>
              <th scope="row">{item.criterion}</th>
              {models.map((model) => (
                <td key={model.id}>{item.values[model.id]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
