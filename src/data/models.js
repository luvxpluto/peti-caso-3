export const sourcePlaceholderUrl = 'https://docs.google.com/document/d/PLACEHOLDER'

export const modelOrder = [
  'dmm',
  'deloitte',
  'gartner',
  'cmmi',
  'mckinsey-dq',
  'bcg-dai',
]

const sharedLevels = [
  {
    level: 1,
    title: '[PLACEHOLDER] Inicial',
    description: '[PLACEHOLDER] Capacidades aisladas, bajo control formal y baja medición.',
  },
  {
    level: 2,
    title: '[PLACEHOLDER] Gestionado',
    description: '[PLACEHOLDER] Prácticas repetibles, métricas básicas y gobierno incipiente.',
  },
  {
    level: 3,
    title: '[PLACEHOLDER] Definido',
    description: '[PLACEHOLDER] Procesos integrados y alineados con objetivos de negocio.',
  },
  {
    level: 4,
    title: '[PLACEHOLDER] Medido',
    description: '[PLACEHOLDER] Decisiones basadas en datos y seguimiento continuo de valor.',
  },
  {
    level: 5,
    title: '[PLACEHOLDER] Optimizado',
    description: '[PLACEHOLDER] Mejora continua, innovación escalable y adaptación permanente.',
  },
]

export const models = [
  {
    id: 'dmm',
    shortName: 'DMM',
    name: 'Digital Maturity Model',
    organization: 'TM Forum',
    route: '/modelos/dmm',
    sourceUrl: sourcePlaceholderUrl,
    icon: 'orbit',
    cardDescription:
      '[PLACEHOLDER] Modelo para diagnosticar capacidades digitales, priorizar brechas y orientar una hoja de ruta de transformación.',
    purpose:
      '[PLACEHOLDER] Describir el propósito específico del DMM dentro del diagnóstico de madurez digital y su relación con la planificación estratégica de TI.',
    dimensions: [
      '[PLACEHOLDER] Estrategia digital',
      '[PLACEHOLDER] Experiencia del cliente',
      '[PLACEHOLDER] Operaciones digitales',
      '[PLACEHOLDER] Tecnología y datos',
      '[PLACEHOLDER] Cultura y talento',
    ],
    maturityLevels: sharedLevels,
    asIs:
      '[PLACEHOLDER] Registrar capacidades actuales, brechas críticas, restricciones operativas y nivel de adopción digital.',
    toBe:
      '[PLACEHOLDER] Definir capacidades objetivo, arquitectura futura, iniciativas priorizadas y métricas de avance.',
    petiUse:
      '[PLACEHOLDER] Explicar cómo este modelo alimenta objetivos estratégicos, portafolio de proyectos, mapa de capacidades y gobierno del PETI.',
    advantages:
      '[PLACEHOLDER] Ventajas principales del modelo para comparación, diagnóstico y priorización estratégica.',
    limitations:
      '[PLACEHOLDER] Limitaciones, condiciones de uso y aspectos que deben complementarse con otras herramientas.',
    idealContext:
      '[PLACEHOLDER] Contexto organizacional donde el modelo genera mayor valor.',
    videoUrl: 'https://www.youtube.com/embed/',
    levelsCount: '5',
    keyDimensions: '[PLACEHOLDER] Estrategia, clientes, operaciones, tecnología, cultura',
    mainFocus: '[PLACEHOLDER] Diagnóstico integral de madurez digital',
    idealFor: '[PLACEHOLDER] Organizaciones que buscan una línea base transversal',
    selectionCriteria:
      '[PLACEHOLDER] Usar cuando se necesita una visión amplia de capacidades digitales y un mapa inicial de transformación.',
  },
  {
    id: 'deloitte',
    shortName: 'Deloitte',
    name: 'Deloitte Digital Maturity Model',
    organization: 'Deloitte',
    route: '/modelos/deloitte',
    sourceUrl: sourcePlaceholderUrl,
    icon: 'signal',
    cardDescription:
      '[PLACEHOLDER] Marco orientado a evaluar capacidades digitales desde estrategia, operaciones, experiencia y tecnología.',
    purpose:
      '[PLACEHOLDER] Explicar el propósito del enfoque Deloitte para conectar ambición digital, capacidades empresariales e inversiones tecnológicas.',
    dimensions: [
      '[PLACEHOLDER] Estrategia y liderazgo',
      '[PLACEHOLDER] Cliente y canales',
      '[PLACEHOLDER] Operaciones inteligentes',
      '[PLACEHOLDER] Plataforma tecnológica',
      '[PLACEHOLDER] Organización y talento',
    ],
    maturityLevels: [
      { ...sharedLevels[0], title: '[PLACEHOLDER] Exploratorio' },
      { ...sharedLevels[1], title: '[PLACEHOLDER] Emergente' },
      { ...sharedLevels[2], title: '[PLACEHOLDER] Integrado' },
      { ...sharedLevels[3], title: '[PLACEHOLDER] Escalado' },
      { ...sharedLevels[4], title: '[PLACEHOLDER] Transformador' },
    ],
    asIs:
      '[PLACEHOLDER] Documentar la ambición digital actual, capacidades disponibles y madurez de ejecución.',
    toBe:
      '[PLACEHOLDER] Diseñar una agenda de transformación con capacidades objetivo y portafolio priorizado.',
    petiUse:
      '[PLACEHOLDER] Relacionar inversiones tecnológicas con prioridades de negocio, capacidades digitales y valor esperado.',
    advantages:
      '[PLACEHOLDER] Fortalezas del modelo para traducir estrategia digital en iniciativas ejecutables.',
    limitations:
      '[PLACEHOLDER] Puntos que requieren adaptación a escala, industria, presupuesto y gobierno de la organización.',
    idealContext:
      '[PLACEHOLDER] Empresas que desean alinear transformación digital con estrategia corporativa y experiencia del cliente.',
    videoUrl: 'https://www.youtube.com/embed/',
    levelsCount: '5',
    keyDimensions: '[PLACEHOLDER] Liderazgo, cliente, operaciones, tecnología, talento',
    mainFocus: '[PLACEHOLDER] Transformación alineada al negocio',
    idealFor: '[PLACEHOLDER] Empresas con foco ejecutivo y portafolio digital',
    selectionCriteria:
      '[PLACEHOLDER] Usar cuando se busca conectar madurez digital con una agenda ejecutiva de transformación.',
  },
  {
    id: 'gartner',
    shortName: 'Gartner',
    name: 'Gartner Digital Business Maturity Model',
    organization: 'Gartner',
    route: '/modelos/gartner',
    sourceUrl: sourcePlaceholderUrl,
    icon: 'radar',
    cardDescription:
      '[PLACEHOLDER] Modelo de referencia para comprender la evolución de capacidades digitales y su impacto en el negocio.',
    purpose:
      '[PLACEHOLDER] Detallar cómo el enfoque Gartner permite evaluar el avance desde optimización digital hasta negocio digital.',
    dimensions: [
      '[PLACEHOLDER] Visión de negocio digital',
      '[PLACEHOLDER] Ecosistema y plataformas',
      '[PLACEHOLDER] Datos y analítica',
      '[PLACEHOLDER] Modelo operativo',
      '[PLACEHOLDER] Innovación y escalamiento',
    ],
    maturityLevels: [
      { ...sharedLevels[0], title: '[PLACEHOLDER] Conciencia' },
      { ...sharedLevels[1], title: '[PLACEHOLDER] Experimentación' },
      { ...sharedLevels[2], title: '[PLACEHOLDER] Sistematización' },
      { ...sharedLevels[3], title: '[PLACEHOLDER] Escala' },
      { ...sharedLevels[4], title: '[PLACEHOLDER] Negocio digital' },
    ],
    asIs:
      '[PLACEHOLDER] Identificar etapa actual, experimentos existentes, brechas de plataforma y nivel de adopción.',
    toBe:
      '[PLACEHOLDER] Formular un estado objetivo de negocio digital con capacidades escalables y métricas estratégicas.',
    petiUse:
      '[PLACEHOLDER] Usar el modelo para definir iniciativas de plataforma, datos, innovación y gobierno del portafolio PETI.',
    advantages:
      '[PLACEHOLDER] Útil para conversaciones ejecutivas sobre evolución digital, ecosistemas y capacidades competitivas.',
    limitations:
      '[PLACEHOLDER] Requiere aterrizaje metodológico para convertir categorías de madurez en planes de proyecto detallados.',
    idealContext:
      '[PLACEHOLDER] Organizaciones que evalúan modelos de negocio digitales, plataformas y ecosistemas.',
    videoUrl: 'https://www.youtube.com/embed/',
    levelsCount: '5',
    keyDimensions: '[PLACEHOLDER] Negocio digital, plataformas, datos, operación, innovación',
    mainFocus: '[PLACEHOLDER] Evolución hacia negocio digital',
    idealFor: '[PLACEHOLDER] Organizaciones que quieren orientar decisiones ejecutivas',
    selectionCriteria:
      '[PLACEHOLDER] Usar cuando el PETI debe sustentar una evolución hacia plataformas y nuevos modelos digitales.',
  },
  {
    id: 'cmmi',
    shortName: 'CMMI',
    name: 'Capability Maturity Model Integration',
    organization: 'CMMI Institute / ISACA',
    route: '/modelos/cmmi',
    sourceUrl: sourcePlaceholderUrl,
    icon: 'layers',
    cardDescription:
      '[PLACEHOLDER] Referencia de madurez de procesos para mejorar capacidades, disciplina operativa y gestión continua.',
    purpose:
      '[PLACEHOLDER] Explicar cómo CMMI aporta estructura para evaluar y mejorar procesos de TI, entrega y gobierno.',
    dimensions: [
      '[PLACEHOLDER] Gobierno de procesos',
      '[PLACEHOLDER] Gestión de proyectos',
      '[PLACEHOLDER] Calidad y medición',
      '[PLACEHOLDER] Gestión de servicios',
      '[PLACEHOLDER] Mejora continua',
    ],
    maturityLevels: [
      { ...sharedLevels[0], description: '[PLACEHOLDER] Procesos impredecibles, reactivos y dependientes de esfuerzos individuales.' },
      { ...sharedLevels[1], description: '[PLACEHOLDER] Prácticas básicas de gestión permiten repetir resultados en proyectos.' },
      { ...sharedLevels[2], description: '[PLACEHOLDER] Procesos organizacionales estandarizados y documentados.' },
      {
        ...sharedLevels[3],
        title: '[PLACEHOLDER] Cuantitativamente gestionado',
        description: '[PLACEHOLDER] Desempeño controlado con métricas, variabilidad y objetivos cuantitativos.',
      },
      { ...sharedLevels[4], description: '[PLACEHOLDER] Mejora continua basada en innovación, análisis causal y aprendizaje.' },
    ],
    asIs:
      '[PLACEHOLDER] Evaluar disciplina de procesos, consistencia de entrega, métricas y puntos de variación.',
    toBe:
      '[PLACEHOLDER] Definir procesos objetivo, métricas de control, gobierno operativo y prácticas de mejora.',
    petiUse:
      '[PLACEHOLDER] Aplicar CMMI para fortalecer la ejecución del portafolio PETI, calidad de servicios y gobernanza.',
    advantages:
      '[PLACEHOLDER] Muy útil para madurez de procesos, control operativo, calidad y mejora sistemática.',
    limitations:
      '[PLACEHOLDER] Puede requerir adaptación para cubrir estrategia digital, experiencia del cliente e innovación.',
    idealContext:
      '[PLACEHOLDER] Áreas de TI que necesitan formalizar procesos, mejorar entrega y controlar desempeño.',
    videoUrl: 'https://www.youtube.com/embed/',
    levelsCount: '5',
    keyDimensions: '[PLACEHOLDER] Procesos, proyectos, calidad, servicios, mejora',
    mainFocus: '[PLACEHOLDER] Madurez de procesos y capacidades',
    idealFor: '[PLACEHOLDER] Organizaciones con necesidad de control y estandarización',
    selectionCriteria:
      '[PLACEHOLDER] Usar cuando la prioridad del PETI es mejorar ejecución, procesos, calidad y capacidad operativa.',
  },
  {
    id: 'mckinsey-dq',
    shortName: 'McKinsey DQ',
    name: 'McKinsey Digital Quotient',
    organization: 'McKinsey & Company',
    route: '/modelos/mckinsey-dq',
    sourceUrl: sourcePlaceholderUrl,
    icon: 'spark',
    cardDescription:
      '[PLACEHOLDER] Enfoque para medir el cociente digital de la organización en estrategia, capacidades y cultura.',
    purpose:
      '[PLACEHOLDER] Describir cómo el DQ evalúa la preparación digital desde prácticas de gestión, velocidad y orientación al cliente.',
    dimensions: [
      '[PLACEHOLDER] Estrategia digital',
      '[PLACEHOLDER] Capacidades y activos',
      '[PLACEHOLDER] Agilidad organizacional',
      '[PLACEHOLDER] Cultura y talento',
      '[PLACEHOLDER] Métricas de valor',
    ],
    maturityLevels: [
      { ...sharedLevels[0], title: '[PLACEHOLDER] Rezagado' },
      { ...sharedLevels[1], title: '[PLACEHOLDER] Básico' },
      { ...sharedLevels[2], title: '[PLACEHOLDER] Competente' },
      { ...sharedLevels[3], title: '[PLACEHOLDER] Avanzado' },
      { ...sharedLevels[4], title: '[PLACEHOLDER] Líder digital' },
    ],
    asIs:
      '[PLACEHOLDER] Medir el punto de partida en estrategia, capacidades, talento, agilidad y orientación a valor.',
    toBe:
      '[PLACEHOLDER] Establecer una aspiración de DQ, capacidades críticas y prácticas de gestión objetivo.',
    petiUse:
      '[PLACEHOLDER] Convertir brechas de cociente digital en iniciativas de talento, datos, arquitectura y gobierno.',
    advantages:
      '[PLACEHOLDER] Ayuda a conectar madurez digital con desempeño empresarial, agilidad y cultura.',
    limitations:
      '[PLACEHOLDER] Requiere complementar con instrumentos detallados para arquitectura, procesos y roadmap tecnológico.',
    idealContext:
      '[PLACEHOLDER] Organizaciones que buscan acelerar adopción digital, agilidad y capacidades orientadas a valor.',
    videoUrl: 'https://www.youtube.com/embed/',
    levelsCount: '5',
    keyDimensions: '[PLACEHOLDER] Estrategia, capacidades, agilidad, cultura, valor',
    mainFocus: '[PLACEHOLDER] Cociente digital y desempeño',
    idealFor: '[PLACEHOLDER] Empresas que desean medir su preparación digital competitiva',
    selectionCriteria:
      '[PLACEHOLDER] Usar cuando el PETI debe priorizar capacidades digitales, talento y velocidad de ejecución.',
  },
  {
    id: 'bcg-dai',
    shortName: 'BCG DAI',
    name: 'BCG Digital Acceleration Index',
    organization: 'Boston Consulting Group',
    route: '/modelos/bcg-dai',
    sourceUrl: sourcePlaceholderUrl,
    icon: 'prism',
    cardDescription:
      '[PLACEHOLDER] Índice para evaluar aceleración digital, capacidades, habilitadores y resultados de transformación.',
    purpose:
      '[PLACEHOLDER] Presentar cómo BCG DAI permite comparar madurez digital, priorizar aceleradores y orientar inversiones.',
    dimensions: [
      '[PLACEHOLDER] Estrategia y ambición',
      '[PLACEHOLDER] Digital core y plataformas',
      '[PLACEHOLDER] Datos e inteligencia artificial',
      '[PLACEHOLDER] Nuevas formas de trabajo',
      '[PLACEHOLDER] Impacto y escalamiento',
    ],
    maturityLevels: [
      { ...sharedLevels[0], title: '[PLACEHOLDER] Inicial' },
      { ...sharedLevels[1], title: '[PLACEHOLDER] En desarrollo' },
      { ...sharedLevels[2], title: '[PLACEHOLDER] Acelerando' },
      { ...sharedLevels[3], title: '[PLACEHOLDER] Avanzado' },
      { ...sharedLevels[4], title: '[PLACEHOLDER] Líder' },
    ],
    asIs:
      '[PLACEHOLDER] Evaluar aceleración actual, brechas en digital core, datos, talento y escalamiento.',
    toBe:
      '[PLACEHOLDER] Diseñar aceleradores prioritarios, iniciativas de plataforma, capacidades de IA y métricas de impacto.',
    petiUse:
      '[PLACEHOLDER] Traducir el índice en una hoja de ruta PETI centrada en aceleración, valor y capacidades digitales.',
    advantages:
      '[PLACEHOLDER] Favorece benchmarking, priorización de aceleradores y foco en impacto medible.',
    limitations:
      '[PLACEHOLDER] Puede requerir acceso a referencias comparativas y adaptación a la realidad local.',
    idealContext:
      '[PLACEHOLDER] Empresas que buscan acelerar resultados digitales y comparar su avance frente a referentes.',
    videoUrl: 'https://www.youtube.com/embed/',
    levelsCount: '5',
    keyDimensions: '[PLACEHOLDER] Ambición, digital core, datos/IA, trabajo ágil, impacto',
    mainFocus: '[PLACEHOLDER] Aceleración digital y benchmarking',
    idealFor: '[PLACEHOLDER] Organizaciones orientadas a acelerar impacto digital',
    selectionCriteria:
      '[PLACEHOLDER] Usar cuando se necesita priorizar aceleradores digitales y medir avance frente a objetivos de impacto.',
  },
]

export const modelsById = Object.fromEntries(models.map((model) => [model.id, model]))

export const getAdjacentModels = (modelId) => {
  const index = modelOrder.indexOf(modelId)
  const previousId = index > 0 ? modelOrder[index - 1] : null
  const nextId = index < modelOrder.length - 1 ? modelOrder[index + 1] : null

  return {
    previous: previousId ? modelsById[previousId] : null,
    next: nextId ? modelsById[nextId] : null,
  }
}
