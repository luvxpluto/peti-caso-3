export const comparisonIntro =
  'Esta comparación resume el propósito, enfoque, ventajas, limitaciones y contexto de uso de seis modelos de madurez digital relevantes para la construcción de un PETI. La lectura conjunta permite identificar cuáles modelos aportan mejor al diagnóstico estratégico, cuáles fortalecen la ejecución y cuáles resultan más útiles cuando la organización necesita compararse con su entorno competitivo.'

export const comparisonCriteria = [
  {
    criterion: 'Propósito',
    values: {
      dmm: 'Evaluar el nivel de madurez digital y definir una hoja de ruta para mejorar capacidades digitales.',
      deloitte:
        'Evaluar la madurez digital de la organización, identificar brechas entre el estado actual (AS-IS) y el deseado (TO-BE), y orientar decisiones estratégicas e inversiones digitales.',
      gartner:
        'Evaluar el nivel de madurez digital de una organización para identificar brechas y orientar la toma de decisiones estratégicas, priorizando inversiones y definiendo la ruta de transformación digital.',
      cmmi:
        'Mejorar la madurez de los procesos organizacionales de forma estructurada para aumentar la calidad, la eficiencia y la predictibilidad de los resultados.',
      'mckinsey-dq':
        'Medir la madurez digital de la organización de forma sistemática para identificar brechas y orientar la transformación digital.',
      'bcg-dai':
        'Evaluar de manera cuantitativa el estado actual y el estado deseado de la madurez digital en comparación con la competencia dentro del mismo mercado.',
    },
  },
  {
    criterion: 'Enfoque',
    values: {
      dmm: 'Diagnóstico basado en cinco dimensiones: estrategia, personas, datos, tecnología y procesos, con niveles de madurez progresivos.',
      deloitte:
        'Analiza toda la empresa desde clientes, estrategia, tecnología, operaciones y cultura.',
      gartner:
        'Se basa en cinco dimensiones y nueve competencias evaluadas mediante niveles progresivos, integrando aspectos tecnológicos y organizacionales.',
      cmmi: 'Se orienta a la institucionalización de procesos de calidad.',
      'mckinsey-dq':
        'Tiene un enfoque organizacional y estratégico, con énfasis en la madurez digital integral de la empresa.',
      'bcg-dai':
        'Se centra en el posicionamiento competitivo y en apoyar decisiones de alto nivel.',
    },
  },
  {
    criterion: 'Ventajas',
    values: {
      dmm: 'Es intuitivo, basado en benchmarks, orientado a resultados de negocio, flexible y con herramienta pública.',
      deloitte:
        'Ofrece una visión completa de la transformación digital, incluye benchmarking sectorial y permite priorizar iniciativas de mayor impacto estratégico.',
      gartner:
        'Proporciona un marco claro y escalable para evaluar capacidades digitales, facilitando la priorización de iniciativas y la alineación entre estrategia de negocio y TI.',
      cmmi:
        'Su enfoque estructurado y el uso de métricas facilitan la estandarización, el control y la mejora continua de los procesos.',
      'mckinsey-dq':
        'Evalúa la madurez digital de forma integral, incorpora cinco dimensiones clave y ayuda a identificar fortalezas, debilidades y prioridades de mejora.',
      'bcg-dai':
        'Permite conocer mejor el entorno digital del mercado y evaluar de manera más objetiva la madurez digital relativa.',
    },
  },
  {
    criterion: 'Limitaciones',
    values: {
      dmm: 'Puede sesgarse hacia marketing, tiene poca profundidad en gobierno TI, depende de evaluación subjetiva y no es prescriptivo.',
      deloitte:
        'Requiere tiempo, recursos y participación organizacional; además, puede ser subjetivo al apoyarse en autoevaluaciones.',
      gartner:
        'No es completamente público, por lo que algunas herramientas requieren pago o acceso a Gartner. Si no se usan datos objetivos, los resultados pueden perder precisión.',
      cmmi:
        'Exige un alto esfuerzo organizacional y puede percibirse como complejo o burocrático si no existe una adecuada gestión del cambio.',
      'mckinsey-dq':
        'Su interpretación depende del benchmark o contexto de comparación, por lo que el resultado no siempre funciona como una medida completamente absoluta.',
      'bcg-dai':
        'Depende de comparaciones con otras empresas del sector; si no existen suficientes datos comparativos, los resultados pierden utilidad y las preguntas pueden introducir sesgos.',
    },
  },
  {
    criterion: 'Tipo de organización',
    values: {
      dmm: 'Empresas orientadas al cliente y con canales digitales.',
      deloitte:
        'Principalmente empresas medianas y grandes con múltiples áreas. Aunque nació en telecomunicaciones, sus principios son aplicables a cualquier organización en transformación digital.',
      gartner:
        'Está dirigido sobre todo a organizaciones medianas y grandes, aunque es adaptable a otros contextos.',
      cmmi:
        'Aplica especialmente a empresas medianas y grandes que desarrollan productos o servicios tecnológicos o gestionan proyectos complejos.',
      'mckinsey-dq':
        'Resulta útil para empresas medianas y grandes de cualquier sector donde existen múltiples áreas funcionales.',
      'bcg-dai': 'Se ajusta mejor a organizaciones medianas y grandes dentro de mercados ya definidos.',
    },
  },
]

export const comparisonInsights = [
  {
    title: 'Modelos para diagnóstico estratégico',
    description:
      'DMM, Deloitte, Gartner y McKinsey DQ se orientan a entender el estado digital actual, identificar brechas y traducirlas en prioridades para la transformación.',
  },
  {
    title: 'Modelo para disciplina operativa',
    description:
      'CMMI destaca cuando el PETI necesita fortalecer ejecución, estandarización, control y mejora continua de procesos de TI o de proyectos complejos.',
  },
  {
    title: 'Modelo para presión competitiva',
    description:
      'BCG DAI resulta especialmente valioso cuando la organización necesita leer su posición relativa frente al mercado y justificar decisiones de inversión con benchmark externo.',
  },
]

export const conclusionQuestion =
  '¿Qué modelo o combinación de modelos utilizarían como base para construir un PETI y por qué?'

export const conclusionIntro =
  'La selección del modelo para construir un PETI debe responder a la estrategia institucional y a la forma en que la organización concibe el papel de TI dentro del negocio. Por eso, no existe una única respuesta definitiva: la mejor base dependerá de las características, necesidades y nivel de madurez de cada organización.'

export const conclusionRecommendation =
  'Si se toman como referencia los principios de COBIT 2019, especialmente APO02, que busca asegurar que la tecnología apoye los objetivos del negocio y se gestione de forma estructurada, la combinación más adecuada es Gartner, CMMI y Deloitte Digital Maturity Model.'

export const conclusionReasons = [
  {
    title: 'DMM como lectura rápida de capacidades digitales',
    description:
      'Funciona bien como punto de partida cuando se necesita un diagnóstico inicial simple, entendible para negocio y orientado a priorizar brechas entre el estado actual y el estado deseado.',
    modelId: 'dmm',
  },
  {
    title: 'Deloitte como lente organizacional',
    description:
      'Complementa con una visión integral de cultura, operaciones y adopción del cambio, elementos clave para que la transformación propuesta por el PETI sea viable.',
    modelId: 'deloitte',
  },
  {
    title: 'Gartner como base estratégica',
    description:
      'Aporta el marco para evaluar el estado actual, definir el estado futuro y construir una hoja de ruta del PETI alineada con la estrategia del negocio.',
    modelId: 'gartner',
  },
  {
    title: 'CMMI como soporte de ejecución',
    description:
      'Fortalece la mejora y la estandarización de procesos, ayudando a que el PETI no se quede en lineamientos y pueda sostener una ejecución disciplinada.',
    modelId: 'cmmi',
  },
  {
    title: 'McKinsey DQ como diagnóstico integral complementario',
    description:
      'Aporta una mirada transversal sobre estrategia, capacidades y desempeño digital, útil para contrastar fortalezas y debilidades de la organización desde una lógica más integral.',
    modelId: 'mckinsey-dq',
  },
  {
    title: 'BCG DAI como referencia competitiva',
    description:
      'Es valioso cuando el PETI necesita justificar prioridades de inversión comparando la posición digital de la organización frente a competidores o referentes del mercado.',
    modelId: 'bcg-dai',
  },
]

export const conclusionClosing =
  'En conjunto, estos tres modelos permiten construir un PETI equilibrado, donde la estrategia, la operación y la transformación organizacional se integran de forma coherente con los principios de gobernanza de TI.'
