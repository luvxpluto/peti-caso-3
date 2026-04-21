function SectionBlock({ eyebrow, title, children, className = '' }) {
  return (
    <section className={`section-block reveal ${className}`}>
      <div className="section-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}

export default SectionBlock
