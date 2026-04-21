const meetings = [
  {
    number: '01',
    date: '20/04/2026',
    place: 'Google Meet',
    time: '06:00 pm / 07:00 pm',
    objective:
      'Organizar el trabajo del Caso Práctico #3, asignar responsabilidades entre los equipos y alinear los criterios para asegurar que el contenido sea coherente.',
    present:
      'Nathalia Granados, Giancarlo Jiménez, Sebastián Navarro, Gabriel Cerdas Chinchilla, Karina Martínez, Gerald Villalta, Jonathan Carmona Sequeira, Yoarlin Barahona, Randy Herrera',
    absent: '-',
    topics: [
      {
        title: 'Distribución de tareas entre equipos',
        comments:
          'Se definió que el equipo 7 se encargará de la parte técnica y la plataforma. Los demás equipos trabajarán en los 6 temas asignados y 2 equipos en la creación de videos.',
        agreements:
          'Cada grupo debe cumplir con su responsabilidad asignada (temas o videos) y coordinar con los demás para asegurar integración del trabajo.',
      },
      {
        title: 'Coherencia y cumplimiento de la rúbrica',
        comments:
          'Se enfatizó la importancia de mantener congruencia entre todos los modelos desarrollados por los grupos. Se indicó revisar la rúbrica para cumplir con todos los requisitos.',
        agreements:
          'Todo el contenido debe estar alineado, conectado y cumplir estrictamente con los criterios de la rúbrica.',
      },
      {
        title: 'Gestión del tiempo y comunicación',
        comments:
          'Se cuenta con 5 horas totales, con 2 horas para completar la parte escrita (hasta las 8:30 p.m). La comunicación constante es clave durante el desarrollo.',
        agreements:
          'Entregar las partes escritas a las 8:30 p.m., reportar avances cada hora y avisar en el grupo de Whatsapp cuando un equipo finalice.',
      },
    ],
  },
  {
    number: '02',
    date: '20/04/2026',
    place: 'Google Meet',
    time: '08:50 pm / 09:44 pm',
    objective:
      'Definir los criterios para la comparación entre modelos y discutir la respuesta a la pregunta de conclusión del caso.',
    present:
      'Nathalia Granados, Giancarlo Jiménez, Gabriel Cerdas Chinchilla, Karina Martínez, Gerald Villalta, Randy Herrera',
    absent: '-',
    topics: [
      {
        title: 'Definición de criterios de comparación',
        comments:
          'Se discutieron los aspectos más importantes para comparar los modelos de madurez digital, buscando que todos siguieran la misma estructura.',
        agreements:
          'Se utilizarán criterios como propósito, enfoque, ventajas, limitaciones y tipo de organización para realizar la tabla comparativa.',
      },
      {
        title: 'Discusión de la conclusión estratégica',
        comments:
          'Se analizó la pregunta sobre qué modelo o combinación de modelos utilizar para un PETI y por qué. Se compartieron diferentes puntos de vista del grupo.',
        agreements:
          'La conclusión será grupal, bien fundamentada y deberá justificar claramente la elección del modelo o combinación de modelos.',
      },
    ],
  },
]

function MinutesPage() {
  return (
    <article className="page minutes-page">
      <div className="container">
        <header className="page-header reveal">
          <p className="eyebrow">Registro del caso práctico</p>
          <h1>Minutas de reuniones</h1>
          <p>
            Registro de acuerdos, participantes y temas tratados durante la coordinación
            del Caso Práctico #3.
          </p>
        </header>

        <div className="minutes-list">
          {meetings.map((meeting) => (
            <section className="minutes-card reveal" key={meeting.number}>
              <div className="minutes-card-header">
                <div>
                  <p className="eyebrow">Reunión No. {meeting.number}</p>
                  <h2>Minuta de coordinación</h2>
                </div>
                <span>{meeting.date}</span>
              </div>

              <dl className="minutes-meta">
                <div>
                  <dt>Fecha</dt>
                  <dd>{meeting.date}</dd>
                </div>
                <div>
                  <dt>Lugar</dt>
                  <dd>{meeting.place}</dd>
                </div>
                <div>
                  <dt>Hora Inicio/Finalización</dt>
                  <dd>{meeting.time}</dd>
                </div>
              </dl>

              <div className="minutes-section">
                <h3>Objetivo de la reunión</h3>
                <p>{meeting.objective}</p>
              </div>

              <div className="minutes-section">
                <h3>Participantes</h3>
                <p>
                  <strong>Presentes:</strong> {meeting.present}
                </p>
                <p>
                  <strong>Ausentes:</strong> {meeting.absent}
                </p>
              </div>

              <div className="minutes-section">
                <h3>Temas tratados</h3>
                <div className="minutes-topic-grid">
                  {meeting.topics.map((topic, index) => (
                    <article className="minutes-topic" key={topic.title}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <h4>{topic.title}</h4>
                      <p>
                        <strong>Comentarios:</strong> {topic.comments}
                      </p>
                      <p>
                        <strong>Acuerdos:</strong> {topic.agreements}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}

export default MinutesPage
