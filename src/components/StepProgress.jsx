function StepProgress({ levels }) {
  return (
    <ol className="step-progress">
      {levels.map((item) => (
        <li key={item.level} className="step-item">
          <span className="step-number">{item.level}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default StepProgress
