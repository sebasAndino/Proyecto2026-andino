/*
  data.js
  Todo el texto del proyecto vive acá, como un solo objeto DATA.
  Las vistas en views.js solo leen de este objeto — para corregir
  un dato o agregar contenido, edita este archivo.
*/

const DATA = {

  meta: {
    titulo: "De las profundidades oceánicas a la neuroprotección",
    colegio: "Colegio Andino Montessori",
    curso: "I° Medio",
    autores: ["Amanda Valenzuela", "Esperanza Mancilla", "Sebastián Fuentealba"],
    fecha: "04/08/2026"
  },

  pregunta: "¿De qué manera las chaperonas químicas y los osmolitos de la fauna hadal (como el TMAO) podrían inspirar terapias para prevenir el mal plegamiento de proteínas en enfermedades neurodegenerativas?",

  hipotesis: "El desarrollo de tratamientos médicos basados en chaperonas químicas logrará reducir el número de pacientes con enfermedades neurodegenerativas.",

  objetivoGeneral: "Determinar si, en un caso hipotético, las chaperonas químicas podrían ser el tratamiento definitivo para enfermedades neurodegenerativas.",

  objetivosEspecificos: [
    "Comprender cómo se generan las enfermedades neurodegenerativas",
    "Explicar qué son las chaperonas químicas",
    "Relacionar el TMAO con las proteínas y las funciones del cerebro",
    "Determinar la posibilidad de un tratamiento"
  ],

  pasos: [
    { titulo: "Investigación en fuentes confiables", texto: "Búsqueda de información sobre las chaperonas químicas y las enfermedades neurodegenerativas en fuentes confiables." },
    { titulo: "Selección de información relevante", texto: "Selección de la información relevante para un tratamiento cuantitativo del tema." },
    { titulo: "Creación de gráficos", texto: "Elaboración de gráficos con la información seleccionada." },
    { titulo: "Relación entre ambos temas", texto: "Análisis de la relación entre las chaperonas químicas y las enfermedades neurodegenerativas." },
    { titulo: "Divulgación científica", texto: "Creación de una presentación para divulgar la información científica reunida." }
  ],

  enfermedades: [
    {
      id: "alzheimer",
      nombre: "Alzheimer",
      resumen: "Acumulación de placas seniles que dañan la memoria y la cognición.",
      mecanismo: "El Alzheimer se caracteriza por la acumulación de sustancias tóxicas en el cerebro llamadas placas seniles, formadas principalmente por proteína beta-amiloide y tau mal plegadas. Esto causa la muerte de células nerviosas y la pérdida progresiva de memoria y otras funciones cognitivas.",
      respuesta: "El sistema inmune cerebral, a través de las células microgliales, rodea las placas para intentar contenerlas y reducir el daño que provocan en el tejido neuronal.",
      proteina: "Beta-amiloide, tau",
      funcion: "Memoria y cognición",
      colorVar: "--alz",
      imagen: "https://raw.githubusercontent.com/sebasAndino/Proyecto2026-andino/main/Poster%20Feria%20Cient%C3%ADfica%20_20260821_104003_0000.png",
      imagenAlt: "Póster científico sobre Alzheimer - Proyecto Hadal"
    },
    {
      id: "parkinson",
      nombre: "Parkinson",
      resumen: "Trastorno del movimiento por pérdida de neuronas dopaminérgicas.",
      mecanismo: "El Parkinson es un trastorno del movimiento causado por la pérdida progresiva de neuronas dopaminérgicas en la sustancia negra del cerebro. Esto reduce los niveles de dopamina, neurotransmisor esencial para el control motor.",
      respuesta: "Se produce una acumulación de agregados proteicos conocidos como Cuerpos de Lewy, formados principalmente por la proteína alfa-sinucleína mal plegada.",
      proteina: "Alfa-sinucleína (Cuerpos de Lewy)",
      funcion: "Movimiento y coordinación",
      colorVar: "--park",
      imagen: "https://raw.githubusercontent.com/sebasAndino/Proyecto2026-andino/main/Poster%20Feria%20Cient%C3%ADfica%20_20260821_103954_0000.png",
      imagenAlt: "Póster científico sobre Parkinson - Proyecto Hadal"
    },
    {
      id: "ela",
      nombre: "Esclerosis Lateral Amiotrófica (ELA)",
      resumen: "Debilita los músculos al dañar las neuronas motoras.",
      mecanismo: "La ELA es una enfermedad que debilita progresivamente los músculos al dañar las neuronas que controlan los movimientos voluntarios. Esto causa parálisis progresiva que eventualmente afecta la capacidad de respirar.",
      respuesta: "A diferencia del Alzheimer y el Parkinson, la ELA no suele afectar la mente ni los sentidos, concentrando el daño en la vía motora. Se caracteriza por la acumulación de proteínas TDP-43 mal plegadas.",
      proteina: "SOD1, TDP-43",
      funcion: "Movimiento voluntario",
      colorVar: "--ela",
      imagen: "https://raw.githubusercontent.com/sebasAndino/Proyecto2026-andino/main/Poster%20Feria%20Cient%C3%ADfica%20_20260821_103947_0000.png",
      imagenAlt: "Póster científico sobre ELA - Proyecto Hadal"
    }
  ],

  chaperonas: {
    intro: "Son moléculas pequeñas que estabilizan la estructura de las proteínas, facilitando su correcto plegamiento — y algunas de las más notables provienen de organismos que viven bajo presiones extremas en las profundidades oceánicas.",
    oceano: {
      texto: "Las chaperonas de la fauna hadal presentan una diferencia significativa respecto a otros organismos: la presencia de TMAO (óxido de trimetilamina), un soluto que estabiliza las proteínas incluso bajo presiones de 1000+ atmósferas. Estos organismos han evolucionado mecanismos moleculares para mantener la integridad proteica en condiciones extremas.",
      imagen: "https://raw.githubusercontent.com/sebasAndino/Proyecto2026-andino/main/Poster%20Feria%20Cient%C3%ADfica%20_20260821_103937_0000.png",
      imagenAlt: "Póster sobre Chaperonas - Proyecto Hadal"
    },
    cerebro: {
      texto: "En el cerebro humano ya existen chaperonas de forma natural. Las chaperonas generales actúan de manera inespecífica, mientras que las específicas estabilizan las proteínas lo suficiente como para evitar su agregación. Sin embargo, en enfermedades como Alzheimer y Parkinson, estas chaperonas naturales no logran compensar el mal plegamiento acelerado.",
      imagen: "https://raw.githubusercontent.com/sebasAndino/Proyecto2026-andino/main/Poster%20Feria%20Cient%C3%ADfica%20_20260821_103937_0000.png",
      imagenAlt: "Póster sobre Chaperonas - Proyecto Hadal"
    },
    tmao: "TMAO — óxido de trimetilamina: el soluto que le permite a la fauna hadal mantener sus proteínas plegadas correctamente incluso bajo presión extrema, y el punto de partida de la pregunta: ¿podría ayudar a proteger neuronas en el cerebro humano?",
    pregunta: "El concepto es que si el TMAO y otras chaperonas de organismos hadales pueden mantener proteínas estables bajo presión extrema, podrían potencialmente inspirar tratamientos para prevenir o revertir el daño neuronal en enfermedades neurodegenerativas."
  },

  resultados: {
    veredicto: "Hipótesis rechazada",
    resumen: "Basándose en la investigación realizada, no se encontró evidencia suficiente para confirmar que las chaperonas químicas puedan usarse actualmente como tratamiento definitivo para enfermedades neurodegenerativas. Sin embargo, el concepto abre puertas a investigación futura.",
    razones: [
      "Faltan estudios y datos suficientes: la investigación en este campo es aún incipiente.",
      "Poco interés científico: es un área de investigación emergente pero no prioritaria actualmente.",
      "Alta complejidad experimental: adaptar moléculas de organismos hadales al cerebro humano es extremadamente complejo.",
      "Seguridad desconocida: se desconoce si son seguras o si tienen efectos secundarios en el cerebro humano."
    ],
    conclusion: "Aunque las chaperonas de la zona hadal podrían potencialmente reparar proteínas mal plegadas y servir de base para terapias contra enfermedades neurodegenerativas, por ahora no existe suficiente evidencia científica para considerarlas un tratamiento definitivo. La investigación continúa.",
    perspectivas: [
      "Biomimética: aprender de la naturaleza para resolver problemas humanos.",
      "Investigación interdisciplinaria: conectar biología marina con neurociencia.",
      "Pensamiento crítico: no todas las hipótesis iniciales se confirman, pero la investigación siempre aporta conocimiento."
    ]
  },

  fuentes: [
    { titulo: "Deutsche Welle", dominio: "dw.com", url: "https://www.dw.com" },
    { titulo: "Europa Press", dominio: "europapress.es", url: "https://www.europapress.es" },
    { titulo: "Mayo Clinic", dominio: "mayoclinic.org", url: "https://www.mayoclinic.org" },
    { titulo: "The New York Times", dominio: "nytimes.com", url: "https://www.nytimes.com" },
    { titulo: "PubMed Central — NLM", dominio: "ncbi.nlm.nih.gov", url: "https://www.ncbi.nlm.nih.gov/pmc/" },
    { titulo: "Ministerio de Salud de Chile", dominio: "minsal.cl", url: "https://www.minsal.cl" },
    { titulo: "Revistas científicas revisadas por pares", dominio: "fuente académica", url: "#" }
  ]
};
