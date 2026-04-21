export const sourcePlaceholderUrl = 'https://docs.google.com/document/d/PLACEHOLDER'

export const modelOrder = [
  'dmm',
  'deloitte',
  'gartner',
  'cmmi',
  'mckinsey-dq',
  'bcg-dai',
]

export const models = [
  {
    id: 'dmm',
    shortName: 'DMM',
    name: 'Digital Maturity Model',
    organization: 'Google y Boston Consulting Group (BCG)',
    route: '/modelos/dmm',
    sourceUrl: sourcePlaceholderUrl,
    icon: 'orbit',
    cardDescription:
      'Modelo para diagnosticar capacidades digitales, identificar brechas AS-IS/TO-BE y orientar una hoja de ruta de transformación digital.',
    purpose:
      'El Digital Maturity Model (DMM) desarrollado por Google y Boston Consulting Group (BCG) es un marco de evaluación que permite determinar el nivel de madurez digital de una organización y definir una hoja de ruta para avanzar hacia estados superiores de transformación digital. \n El modelo facilita diagnosticar el estado actual (AS-IS), identificar brechas respecto al estado deseado (TO-BE) y priorizar inversiones tecnológicas que contribuyan a mejorar la eficiencia operativa y la generación de valor para el cliente.',

    dimensions: [
      'Estrategia \n\n Evalúa el grado en que lo digital está integrado en la estrategia corporativa, considerando liderazgo ejecutivo, visión digital y asignación de recursos.',
      'Organización y personas \n\n Analiza la estructura organizacional, las capacidades del talento digital, la colaboración entre áreas y la cultura orientada al uso de datos.',
      'Datos y audiencia \n\n Examina la capacidad de la organización para capturar, integrar y analizar datos, así como su uso para comprender y segmentar audiencias.',
      'Tecnología y activos digitales \n\n Evalúa la arquitectura tecnológica, la integración de plataformas digitales y el nivel de automatización de los activos digitales.',
      'Medición y procesos \n\n Analiza la capacidad de medir el impacto de las iniciativas digitales mediante métricas de negocio, experimentación y optimización basada en datos.',
    ],
    maturityLevels: [
      {
        level: 1,
        title: 'Nascent (Naciente)',
        description:
          'La organización posee capacidades digitales básicas, datos fragmentados y una baja integración entre áreas. La toma de decisiones es principalmente reactiva.',
      },
      {
        level: 2,
        title: 'Emerging (Emergente)',
        description:
          'Se comienza a utilizar datos propios y se automatizan parcialmente las iniciativas digitales, aunque aún existe una visión limitada entre canales.',
      },
      {
        level: 3,
        title: 'Connected (Conectado)',
        description:
          'Los datos y las plataformas digitales se integran entre múltiples canales, permitiendo vincular las iniciativas digitales con resultados de negocio.',
      },
      {
        level: 4,
        title: 'Multi-Moment (Multimomento)',
        description:
          'La organización personaliza experiencias en tiempo real utilizando datos integrados e inteligencia artificial para optimizar la toma de decisiones y la interacción con el cliente.',
      },
    ],
    targetOrganization:
      'El modelo es especialmente adecuado para organizaciones orientadas al cliente final que poseen canales digitales relevantes, tales como retail, banca de consumo, telecomunicaciones, medios y consumo masivo. También puede aplicarse en organizaciones que buscan alinear áreas como marketing, ventas, datos y TI dentro de su estrategia digital.',
    petiUse:
      'El DMM puede utilizarse dentro del PETI en tres momentos principales: \n • Diagnóstico estratégico: Permite evaluar el nivel actual de madurez digital de la organización y describir el estado digital de forma estructurada. \n • Definición del portafolio de iniciativas: Las brechas identificadas entre AS-IS y TO-BE se traducen en proyectos estratégicos dentro del PETI. \n • Seguimiento de la transformación digital: La aplicación periódica del modelo permite evaluar el avance de la organización en su madurez digital y ajustar la estrategia tecnológica.',
    advantages:
      '• Modelo simple y fácil de comunicar a la alta dirección. \n• Basado en investigación empírica y benchmarking sectorial.\n• Herramienta pública de autodiagnóstico disponible.\n• Vincula la madurez digital con resultados de negocio como ingresos y eficiencia operativa.\n• Flexible y aplicable en múltiples sectores.',
    limitations:
      '• El modelo tiene un origen centrado en marketing digital. \n• No proporciona guías detalladas para la gestión de procesos de TI.\n• Puede existir subjetividad en la asignación de niveles de madurez.\n• No define una hoja de ruta específica de implementación, la cual debe construirse de forma independiente.',
    videoUrl: 'https://www.youtube.com/embed/Wmh2dv5Uqm8',
    levelsCount: '4',
    keyDimensions:
      'Estrategia, organización y personas, datos y audiencia, tecnología y activos digitales, medición y procesos',
    mainFocus: 'Diagnóstico de madurez digital y hoja de ruta de transformación',
    idealFor:
      'Organizaciones orientadas al cliente final con canales digitales relevantes',
    selectionCriteria:
      'Usar cuando se necesita una visión estructurada de la madurez digital, identificar brechas AS-IS/TO-BE y priorizar iniciativas estratégicas.',
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
      'Marco para evaluar capacidades digitales, identificar brechas y orientar iniciativas de transformación digital con apoyo de benchmarking sectorial.',
    purpose:
      'El Deloitte Digital Maturity Model (DMM) permite evaluar el nivel de madurez digital de una organización, identificando su estado actual (AS-IS), las brechas existentes y el estado futuro deseado (TO-BE). El modelo facilita priorizar iniciativas de transformación digital, orientar inversiones tecnológicas y comparar el desempeño digital con organizaciones del mismo sector mediante benchmarking.',
    dimensions: [
      'Cliente \n\n Evalúa la capacidad de la organización para comprender e interactuar con los clientes mediante canales digitales, considerando experiencia del cliente, comportamiento del usuario y confianza en los servicios digitales.',
      'Estrategia \n\n Analiza la visión estratégica digital, la gestión de ecosistemas, la innovación en portafolios y la alineación entre inversiones y transformación digital.',
      'Tecnología \n\n Evalúa las capacidades tecnológicas, incluyendo arquitectura tecnológica, aplicaciones, redes, seguridad, datos y analítica.',
      'Operaciones \n\n Examina la eficiencia operativa digital mediante automatización de procesos, gestión ágil del cambio y análisis de información en tiempo real.',
      'Organización y cultura \n\n Analiza el liderazgo, la gobernanza, el desarrollo del talento y la cultura organizacional orientada a la transformación digital.',
    ],
    maturityLevels: [
      {
        level: 1,
        title: 'Digital Laggard',
        description:
          'Capacidades digitales mínimas, procesos manuales y ausencia de estrategia digital.',
      },
      {
        level: 2,
        title: 'Digital Follower',
        description:
          'Existen iniciativas digitales aisladas sin coordinación estratégica.',
      },
      {
        level: 3,
        title: 'Digital Adopter',
        description:
          'Capacidades digitales implementadas en algunas áreas con cierta integración.',
      },
      {
        level: 4,
        title: 'Digital Transformer',
        description:
          'Las capacidades digitales están alineadas con la estrategia organizacional y se utilizan datos en tiempo real para la toma de decisiones.',
      },
      {
        level: 5,
        title: 'Digital Leader',
        description:
          'La organización alcanza una madurez digital avanzada y lidera la innovación en su sector.',
      },
    ],
    targetOrganization:
      'El modelo fue desarrollado inicialmente para el sector de telecomunicaciones, pero es aplicable a diversos sectores como servicios financieros, salud, manufactura, retail y sector público. Es especialmente útil para organizaciones medianas y grandes que enfrentan procesos de transformación digital y requieren un diagnóstico estructurado de sus capacidades digitales.',
    petiUse:
      'El DMM contribuye al PETI en cuatro aspectos principales: \n • Diagnóstico de TI: Permite evaluar el nivel actual de madurez digital de la organización. \n • Definición de objetivos estratégicos: Apoya la definición del estado digital futuro alineado con la estrategia organizacional. \n • Priorización de iniciativas: Identifica las áreas con mayores brechas y mayor impacto estratégico. \n • Seguimiento de la transformación digital: Permite medir periódicamente el avance de la madurez digital mediante indicadores comparables.',
    advantages:
      '• Proporciona un diagnóstico estructurado de la madurez digital. \n• Permite benchmarking con organizaciones del mismo sector.\n• Evalúa la transformación digital desde una perspectiva integral (estrategia, tecnología, operaciones y cultura).\n• Facilita la priorización de inversiones y proyectos de transformación digital.',
    limitations:
      '• Fue diseñado inicialmente para el sector de telecomunicaciones, por lo que algunas métricas requieren adaptación en otros sectores. \n• Su aplicación completa requiere tiempo, recursos y participación organizacional amplia.\n• Parte del diagnóstico se basa en autoevaluaciones, lo que puede generar sesgos en los resultados.',
    idealContext:
      'Organizaciones medianas y grandes que requieren un diagnóstico estructurado de sus capacidades digitales y comparar su desempeño con referentes del sector.',
    videoUrl: 'https://www.youtube.com/embed/McXRe3nPn_Y',
    levelsCount: '5',
    keyDimensions:
      'Cliente, estrategia, tecnología, operaciones, organización y cultura',
    mainFocus: 'Evaluación integral de madurez digital y benchmarking sectorial',
    idealFor:
      'Organizaciones en transformación digital que necesitan diagnóstico estructurado y priorización de iniciativas',
    selectionCriteria:
      'Usar cuando se busca evaluar capacidades digitales de forma integral, comparar desempeño sectorial y traducir brechas en iniciativas PETI.',
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
      'Modelo de referencia para medir la madurez digital, orientar inversiones y construir una hoja de ruta hacia operaciones digitales más avanzadas.',
    purpose:
      'El Gartner Digital Business Maturity Model tiene como propósito medir de forma objetiva la madurez digital de una organización para orientar sus inversiones en capacidades digitales y evaluar la efectividad de las iniciativas de transformación digital. El modelo permite comprender la posición competitiva de la organización, identificar capacidades que requieren fortalecimiento y definir una hoja de ruta estratégica que guíe la evolución hacia operaciones digitales más avanzadas.',
    dimensions: [
      'Estrategia \n\n Incluye la estrategia digital y la innovación del modelo de negocio, orientadas a definir la dirección y el valor generado por la transformación digital.',
      'Cultura y liderazgo \n\n Evalúa la cultura digital organizacional, así como el liderazgo y el desarrollo de talento digital necesario para impulsar la transformación.',
      'Organización \n\n Analiza la estructura organizacional y la capacidad de generar experiencias de valor para el cliente mediante iniciativas digitales.',
      'Operaciones \n\n Examina las operaciones digitales y la cadena de valor digital, considerando la eficiencia de los procesos y su nivel de automatización.',
      'Tecnología \n\n Evalúa los fundamentos tecnológicos y el uso de datos e inteligencia para apoyar la toma de decisiones y la innovación digital.',
    ],
    maturityLevels: [
      {
        level: 1,
        title: 'Iniciación (Digital Embryonic)',
        description:
          'Las iniciativas digitales son aisladas y reactivas, sin una estrategia digital clara ni estructura organizacional definida.',
      },
      {
        level: 2,
        title: 'Experimentación',
        description:
          'La organización reconoce el valor del entorno digital y comienza a desarrollar proyectos piloto y a centralizar datos.',
      },
      {
        level: 3,
        title: 'Escala',
        description:
          'Las iniciativas digitales se alinean con la estrategia organizacional y se consolidan estructuras de gobernanza y estandarización.',
      },
      {
        level: 4,
        title: 'Fortalecimiento',
        description:
          'La organización toma decisiones basadas en datos y fortalece sus capacidades digitales mediante integración organizacional.',
      },
      {
        level: 5,
        title: 'Transformación (Digital Leader)',
        description:
          'Se produce una transformación completa del modelo de negocio, impulsada por innovación continua, automatización e inteligencia artificial.',
      },
    ],
    targetOrganization:
      'El Gartner Digital Business Maturity Model está orientado principalmente a organizaciones medianas y grandes que enfrentan procesos formales de transformación digital y requieren un diagnóstico estructurado de sus capacidades digitales. El modelo es aplicable en diversos sectores como servicios financieros, salud, manufactura, retail y sector público. Resulta especialmente útil en organizaciones con múltiples unidades de negocio y estructuras de gobernanza establecidas.',
    petiUse:
      'El modelo se integra al Plan Estratégico de Tecnologías de Información (PETI) como una herramienta que permite alinear la estrategia de TI con los objetivos del negocio. \n • Diagnóstico del estado actual (AS-IS): Evalúa el nivel de madurez digital y las capacidades actuales de la organización. \n • Definición del estado futuro (TO-BE): Identifica las capacidades digitales necesarias para apoyar la estrategia organizacional. \n • Definición de la hoja de ruta: Permite construir un portafolio de iniciativas estratégicas alineadas con los objetivos del negocio y la transformación digital.',
    advantages:
      '• Proporciona una evaluación integral de la madurez digital mediante cinco dimensiones y nueve competencias clave. \n• Permite identificar brechas organizacionales y tecnológicas de forma estructurada.\n• Facilita la comunicación estratégica de prioridades digitales a distintos niveles de la organización.\n• Apoya la construcción de hojas de ruta de transformación digital alineadas con los objetivos de negocio.',
    limitations:
      '• El acceso a los instrumentos completos de evaluación requiere suscripción a la plataforma de Gartner. \n• Parte del diagnóstico se basa en autoevaluaciones, lo que puede generar sesgos en los resultados.\n• Algunas capacidades requieren actualización constante debido a la rápida evolución del entorno digital.',
    idealContext:
      'Organizaciones con múltiples unidades de negocio y estructuras de gobernanza establecidas que buscan alinear capacidades digitales con objetivos de negocio.',
    videoUrl: 'https://www.youtube.com/embed/',
    levelsCount: '5',
    keyDimensions:
      'Estrategia, cultura y liderazgo, organización, operaciones, tecnología',
    mainFocus:
      'Evolución hacia operaciones y capacidades de negocio digital más avanzadas',
    idealFor:
      'Organizaciones medianas y grandes con procesos formales de transformación digital',
    selectionCriteria:
      'Usar cuando el PETI debe alinear estrategia de TI y negocio, definir AS-IS/TO-BE y construir una hoja de ruta de transformación digital.',
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
      'Referencia de madurez de procesos para mejorar calidad, eficiencia, predictibilidad y control en la ejecución organizacional.',
    purpose:
      'El Capability Maturity Model Integration (CMMI) es un modelo de referencia orientado a la mejora sistemática de los procesos organizacionales, especialmente en organizaciones que desarrollan productos o servicios complejos. Su propósito es proporcionar un conjunto de mejores prácticas que permitan mejorar la calidad, eficiencia y predictibilidad de los resultados mediante la estandarización y mejora continua de los procesos.',
    dimensions: [
      'Personas \n\n Representan el recurso central de la organización, aportando conocimientos, habilidades y experiencia para ejecutar los procesos organizacionales.',
      'Procedimientos y métodos \n\n Incluyen los procesos, políticas y metodologías que establecen cómo se realizan las actividades dentro de la organización.',
      'Herramientas y tecnologías \n\n Comprenden los recursos tecnológicos que permiten ejecutar y apoyar los procesos organizacionales, como software, infraestructura y sistemas de gestión.',
    ],
    maturityLevels: [
      {
        level: 1,
        title: 'Inicial',
        description:
          'Los procesos son informales o improvisados y los resultados dependen principalmente del esfuerzo individual.',
      },
      {
        level: 2,
        title: 'Gestionado (Managed)',
        description:
          'Los proyectos se planifican, ejecutan y monitorean de acuerdo con políticas organizacionales establecidas.',
      },
      {
        level: 3,
        title: 'Definido (Defined)',
        description:
          'Los procesos están documentados y estandarizados a nivel organizacional, permitiendo mayor consistencia en la ejecución de actividades.',
      },
      {
        level: 4,
        title: 'Cuantitativamente gestionado (Quantitatively Managed)',
        description:
          'La organización utiliza métricas y análisis cuantitativos para controlar y mejorar el desempeño de los procesos.',
      },
      {
        level: 5,
        title: 'Optimizado (Optimizing)',
        description:
          'Se promueve la mejora continua mediante análisis de desempeño, innovación y prevención de defectos en los procesos.',
      },
    ],
    targetOrganization:
      'El modelo CMMI se aplica principalmente en organizaciones que desarrollan productos o servicios tecnológicos y requieren altos niveles de control sobre sus procesos. Es común en empresas de desarrollo de software, consultoras tecnológicas, proveedores de servicios de TI, organizaciones que gestionan proyectos tecnológicos complejos y entidades gubernamentales o proyectos de gran escala.',
    petiUse:
      'Dentro de un Plan Estratégico de Tecnologías de Información (PETI), el modelo CMMI se utiliza para evaluar el nivel de madurez de los procesos relacionados con el desarrollo y gestión de servicios tecnológicos. \n • Diagnóstico de procesos de TI: Analizar el estado actual de los procesos organizacionales relacionados con TI. \n • Identificación de oportunidades de mejora: Detectar prácticas que deben fortalecerse para mejorar la calidad y consistencia de los procesos. \n • Definición de iniciativas de mejora: Incorporar dentro del PETI acciones orientadas a estandarizar procesos, establecer métricas y mejorar la gestión de proyectos tecnológicos.',
    advantages:
      '• Proporciona un enfoque estructurado para la mejora continua de procesos. \n• Permite evaluar la madurez organizacional mediante niveles claramente definidos.\n• Promueve la estandarización y documentación de procesos.\n• Facilita el uso de métricas para mejorar la calidad y el control de proyectos.',
    limitations:
      '• La implementación del modelo requiere tiempo, recursos y cambios organizacionales significativos. \n• Puede percibirse como complejo o burocrático si no se gestiona adecuadamente el cambio organizacional.\n• La adopción del modelo implica revisar y formalizar procesos existentes dentro de la organización.',
    idealContext:
      'Áreas de TI y organizaciones que requieren control, consistencia, calidad y mejora continua de procesos.',
    videoUrl: 'https://www.youtube.com/embed/',
    levelsCount: '5',
    keyDimensions:
      'Personas, procedimientos y métodos, herramientas y tecnologías',
    mainFocus: 'Madurez y mejora continua de procesos organizacionales',
    idealFor:
      'Organizaciones que desarrollan productos o servicios tecnológicos y necesitan alto control de procesos',
    selectionCriteria:
      'Usar cuando la prioridad del PETI es fortalecer la gestión de procesos, la calidad, las métricas y la predictibilidad operativa.',
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
      'Enfoque para medir la madurez digital a partir de prácticas de gestión asociadas con mejor desempeño digital y financiero.',
    purpose:
      'El McKinsey Digital Quotient (DQ) es una metodología diseñada para medir la madurez digital de una organización a partir de las prácticas de gestión asociadas con un mejor desempeño digital y financiero. El modelo permite comprender la posición real de la empresa en su proceso de transformación digital, orientar la definición de una agenda digital y priorizar inversiones hacia iniciativas que generen mayor valor estratégico para el negocio.',
    dimensions: [
      'Estrategia \n\n Analiza si la organización cuenta con una dirección digital clara y alineada con las prioridades del negocio, incluyendo liderazgo ejecutivo y criterios de inversión.',
      'Organización y talento \n\n Evalúa la estructura organizacional, la disponibilidad de talento digital y la capacidad de integrar perfiles técnicos con las áreas de negocio para sostener la transformación digital.',
      'Entrega ágil y cultura \n\n Examina la forma en que los equipos trabajan y se adaptan, considerando la rapidez de ejecución, la colaboración entre funciones y la capacidad de iterar mediante ciclos de aprendizaje continuo.',
      'Capacidades \n\n Evalúa las condiciones técnicas, analíticas y operativas que permiten ejecutar la estrategia digital, incluyendo infraestructura tecnológica, datos y recursos operativos.',
      'Adopción y escalamiento \n\n Analiza la capacidad de la organización para incorporar las iniciativas digitales en la operación y expandirlas hacia distintas áreas del negocio para generar valor sostenible.',
    ],
    maturityLevels: [
      {
        level: 1,
        title: 'Digital Laggards',
        description:
          'Organizaciones con bajo nivel de madurez digital y prácticas digitales poco desarrolladas.',
      },
      {
        level: 2,
        title: 'Digital Followers',
        description:
          'Organizaciones con avances moderados en transformación digital, pero con oportunidades de mejora en varias dimensiones.',
      },
      {
        level: 3,
        title: 'Digital Leaders',
        description:
          'Organizaciones con prácticas digitales avanzadas y mayor desempeño en sus capacidades digitales.',
      },
    ],
    targetOrganization:
      'El McKinsey Digital Quotient resulta especialmente adecuado para organizaciones consolidadas que necesitan evaluar su nivel de madurez digital y orientar su transformación. Se aplica principalmente en empresas medianas y grandes, organizaciones con múltiples áreas funcionales y empresas tradicionales que buscan modernizar su operación digital.',
    petiUse:
      'Dentro de un Plan Estratégico de Tecnologías de Información (PETI), el modelo DQ se utiliza como herramienta de diagnóstico estratégico para evaluar el nivel de madurez digital de la organización. \n • Diagnóstico del estado digital: Comprender el punto de partida de la organización en términos de capacidades digitales. \n • Identificación de brechas: Detectar áreas con menor desarrollo digital y priorizar oportunidades de mejora. \n • Priorización de iniciativas tecnológicas: Orientar las inversiones digitales hacia iniciativas con mayor impacto estratégico.',
    advantages:
      '• Evalúa la madurez digital desde una perspectiva integral que incluye estrategia, talento, cultura y capacidades tecnológicas. \n• Permite identificar fortalezas y debilidades digitales de forma estructurada.\n• Se basa en prácticas asociadas con mejores resultados digitales y financieros.\n• Facilita comparaciones internas y benchmarking organizacional.',
    limitations:
      '• La interpretación de los resultados depende del contexto de comparación utilizado. \n• El nivel de madurez digital se evalúa de forma relativa frente a otras organizaciones o sectores.\n• Los resultados pueden variar según el benchmark utilizado para el análisis.',
    idealContext:
      'Organizaciones consolidadas que buscan evaluar su madurez digital, crear una agenda digital y modernizar su operación.',
    videoUrl: 'https://www.youtube.com/embed/',
    levelsCount: '3',
    keyDimensions:
      'Estrategia, organización y talento, entrega ágil y cultura, capacidades, adopción y escalamiento',
    mainFocus: 'Madurez digital basada en prácticas de gestión y desempeño',
    idealFor:
      'Empresas medianas y grandes que desean orientar su transformación digital con foco en valor',
    selectionCriteria:
      'Usar cuando se necesita medir la preparación digital de la organización y traducir brechas en una agenda de inversión y transformación.',
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
      'Índice para evaluar madurez digital, comparar el posicionamiento frente al sector y priorizar inversiones de transformación.',
    purpose:
      'El BCG Digital Acceleration Index (DAI) es una herramienta de diagnóstico estratégico desarrollada por Boston Consulting Group para evaluar el nivel de madurez digital de una organización. Su propósito es medir qué tan preparada se encuentra una institución en aspectos como estrategia digital, procesos, capacidades tecnológicas y organizacionales. A partir de esta evaluación, el modelo permite identificar fortalezas, brechas y oportunidades de mejora, comparando los resultados con referentes del sector para apoyar la toma de decisiones estratégicas y definir una hoja de ruta de transformación digital.',
    dimensions: [
      'Estrategia \n\n Evalúa si la estrategia digital está alineada con los objetivos del negocio y si existen inversiones orientadas a la transformación digital.',
      'Cliente \n\n Analiza cómo las capacidades digitales mejoran la experiencia del cliente y la interacción mediante canales digitales.',
      'Tecnología \n\n Examina la infraestructura tecnológica, la adopción de tecnologías modernas y la capacidad de escalamiento de las plataformas digitales.',
      'Procesos \n\n Evalúa el nivel de digitalización, eficiencia y automatización de los procesos organizacionales.',
      'Datos \n\n Analiza el uso de datos para la toma de decisiones y la capacidad analítica de la organización.',
      'Cultura y habilidades digitales \n\n Examina la adopción de habilidades digitales, la capacidad organizacional para innovar y la disposición al cambio.',
    ],
    maturityLevels: [
      {
        level: 1,
        title: 'Digital Starter (0–43 puntos)',
        description:
          'La organización actúa de forma reactiva, sin una estrategia digital clara y con iniciativas digitales aisladas.',
      },
      {
        level: 2,
        title: 'Digital Literate (44–66 puntos)',
        description:
          'Existe una estrategia digital definida desde el liderazgo, pero la integración tecnológica y la ejecución operativa aún son limitadas.',
      },
      {
        level: 3,
        title: 'Digital Performer (67–89 puntos)',
        description:
          'Las capacidades digitales están integradas en los procesos organizacionales y se utilizan datos para la toma de decisiones.',
      },
      {
        level: 4,
        title: 'Digital Leader (90–100 puntos)',
        description:
          'La tecnología se convierte en el núcleo del negocio y la organización lidera la innovación digital en su sector.',
      },
    ],
    targetOrganization:
      'El Digital Acceleration Index resulta más adecuado para organizaciones medianas y grandes que ya han iniciado procesos de digitalización y necesitan evaluar su posicionamiento digital frente a sus competidores. Se utiliza especialmente en empresas que buscan fortalecer su estrategia digital y tomar decisiones estratégicas basadas en comparaciones con el mercado.',
    petiUse:
      'Dentro de un Plan Estratégico de Tecnologías de Información (PETI), el modelo DAI se utiliza para: \n • Diagnóstico del estado actual: Evaluar el nivel de madurez digital de la organización y detectar brechas en infraestructura, procesos y talento digital. \n • Benchmarking competitivo: Comparar el desempeño digital de la organización con competidores y líderes del sector. \n • Priorización de inversiones: Orientar las decisiones estratégicas y priorizar iniciativas de transformación digital dentro del portafolio del PETI. \n Además, el modelo contribuye a definir una hoja de ruta tecnológica alineada con los objetivos corporativos.',
    advantages:
      '• Permite evaluar el impacto real de las capacidades digitales en el desempeño del negocio. \n• Facilita la comparación con organizaciones del mismo sector.\n• Apoya la toma de decisiones estratégicas sobre inversión digital.\n• Proporciona una visión rápida del nivel de madurez digital organizacional.',
    limitations:
      '• Depende del acceso a datos comparativos con otras organizaciones del sector. \n• Puede perder precisión si no existen suficientes referencias de benchmarking.\n• No profundiza en la gestión detallada de procesos o gobernanza tecnológica.',
    idealContext:
      'Empresas que ya iniciaron su digitalización y quieren comparar su madurez frente al mercado para orientar decisiones estratégicas.',
    videoUrl: 'https://www.youtube.com/embed/',
    levelsCount: '4',
    keyDimensions:
      'Estrategia, cliente, tecnología, procesos, datos, cultura y habilidades digitales',
    mainFocus: 'Aceleración digital, benchmarking y priorización de inversiones',
    idealFor:
      'Organizaciones medianas y grandes que desean medir su posicionamiento digital frente a competidores',
    selectionCriteria:
      'Usar cuando se necesita comparar madurez digital con referentes del sector y priorizar inversiones de transformación con foco en impacto.',
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