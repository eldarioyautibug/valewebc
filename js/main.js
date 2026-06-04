(function () {
  "use strict";

  const headerHTML = `
  <div id="academicBanner" class="academic-banner" role="alert">
    <div class="academic-banner-inner">
      <p><strong>AVISO ACADÉMICO:</strong> Proyecto de carácter exclusivamente académico, en desarrollo continuo. Los datos y análisis se utilizan únicamente con fines educativos.</p>
      <button id="closeBanner" class="academic-banner-close" aria-label="Cerrar aviso">&times;</button>
    </div>
  </div>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="index.html" aria-label="Inicio">
        <img src="assets/images/logo.png" alt="FIGEMPA" />
        <span class="brand-sep"></span>
        <i class="fas fa-oil-can brand-mark" aria-hidden="true"></i>
      </a>
      <button id="menuToggle" class="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav" id="nav">
        <ul class="nav-list">
          <li class="nav-item"><a class="nav-link" data-page="home" href="index.html">Inicio</a></li>
          <li class="nav-item">
            <a class="nav-link" data-page="introduccion" href="introduccion.html">Introducción <i class="fas fa-chevron-down caret"></i></a>
            <ul class="nav-sub">
              <li><a href="introduccion.html#problema">Planteamiento del Problema</a></li>
              <li><a href="introduccion.html#mapa-geografico">Ubicación Geográfica</a></li>
              <li><a href="introduccion.html#objetivos">Objetivos</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" data-page="mapa" href="mapa.html">Mapa Interactivo</a></li>
          <li class="nav-item">
            <a class="nav-link" data-page="descriptiva" href="descriptiva.html">Estadística Descriptiva <i class="fas fa-chevron-down caret"></i></a>
            <ul class="nav-sub">
              <li><a href="descriptiva.html#metodologia">Metodología</a></li>
              <li><a href="descriptiva.html#tablas">Tablas de Variables</a></li>
              <li><a href="descriptiva.html#variables">Variables</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" data-page="inferencial" href="inferencial.html">Estadística Inferencial</a></li>
          <li class="nav-item"><a class="nav-link" data-page="regresion" href="regresion.html">Modelos de Regresión</a></li>
          <li class="nav-item"><a class="nav-link" data-page="ml" href="machine-learning.html">Machine Learning</a></li>
          <li class="nav-item">
            <a class="nav-link" data-page="mas" href="#">Más <i class="fas fa-chevron-down caret"></i></a>
            <ul class="nav-sub">
              <li><a href="herramientas.html">Herramientas</a></li>
              <li><a href="sobre-nosotros.html">Sobre Nosotros</a></li>
            </ul>
          </li>
          <li class="nav-item"><button class="lang-btn" type="button">ES / EN</button></li>
        </ul>
      </nav>
    </div>
  </header>`;

  const footerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-col">
          <h4>Equipo · Grupo 1</h4>
          <ul>
            <li><span>Almeida Fernando</span></li>
            <li><span>Araujo Valeska</span></li>
            <li><span>Baldeón Ariel</span></li>
            <li><span>Quinchiguango Leslye</span></li>
          </ul>
        </div>
        <div class="footer-right">
          <div class="footer-social" aria-label="Redes de FIGEMPA">
            <a href="https://www.facebook.com/FIGEMPA" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://x.com/figempa_uce" target="_blank" rel="noopener noreferrer" aria-label="X"><i class="fab fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/figempa_uce" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
          <p class="footer-uni">Universidad Central del Ecuador · FIGEMPA</p>
          <p class="footer-copy">© 2026 Grupo 6 — Estadística y Probabilidad.<br>Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>`;

  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.innerHTML = headerHTML;
  if (footerMount) footerMount.innerHTML = footerHTML;

  const page = document.body.getAttribute("data-page");
  if (page) {
    const link = document.querySelector('.nav-link[data-page="' + page + '"]');
    if (link) link.classList.add("active");
  }

  /* ========================================================
     i18n · cambio de idioma ES / EN
     ======================================================== */
  const I18N_H = {
    t_home_hero:  { es: 'Arrendamientos de <em>Petróleo y Gas</em> en Kansas', en: '<em>Oil &amp; Gas</em> Leases in Kansas' },
    t_intro_hero: { es: 'Introducción al <em>análisis</em>', en: 'Introduction to the <em>analysis</em>' },
    t_mapa_hero:  { es: 'Mapa interactivo de <em>concesiones</em>', en: 'Interactive <em>leases</em> map' },
    t_desc_hero:  { es: 'Estadística <em>descriptiva</em>', en: 'Descriptive <em>statistics</em>' },
    t_inf_hero:   { es: 'Estadística <em>inferencial</em>', en: 'Inferential <em>statistics</em>' },
    t_reg_hero:   { es: 'Modelos de <em>regresión</em>', en: 'Regression <em>models</em>' },
    t_tools_hero: { es: 'Herramientas <em>utilizadas</em>', en: '<em>Tools</em> used' },
    t_about_hero: { es: 'Sobre <em>nosotros</em>', en: 'About <em>us</em>' }
  };

  const I18N_T = {
    "Inicio": "Home", "Introducción": "Introduction", "Planteamiento del Problema": "Problem Statement",
    "Ubicación Geográfica": "Geographic Location", "Objetivos": "Objectives", "Mapa Interactivo": "Interactive Map",
    "Estadística Descriptiva": "Descriptive Statistics", "Metodología": "Methodology", "Tablas de Variables": "Variable Tables",
    "Variables": "Variables", "Estadística Inferencial": "Inferential Statistics", "Modelos de Regresión": "Regression Models",
    "Más": "More", "Herramientas": "Tools", "Sobre Nosotros": "About Us",
    "AVISO ACADÉMICO:": "ACADEMIC NOTICE:",
    "Proyecto de carácter exclusivamente académico, en desarrollo continuo. Los datos y análisis se utilizan únicamente con fines educativos.": "An exclusively academic project, under continuous development. Data and analyses are used solely for educational purposes.",
    "Equipo · Grupo 1": "Team · Group 1",
    "Universidad Central del Ecuador · FIGEMPA": "Central University of Ecuador · FIGEMPA",
    "© 2026 Grupo 1 — Estadística y Probabilidad.": "© 2026 Group 1 — Statistics and Probability.",
    "Todos los derechos reservados.": "All rights reserved.",
    "Explorar Proyecto": "Explore Project", "Ver Mapa": "View Map", "Ver sección": "View section",
    "Dataset": "Dataset", "Dataset Limpio": "Clean Dataset", "Visitar": "Visit", "Ver en Google Maps": "View on Google Maps",
    "Un análisis estadístico de datos abiertos del KGS, aplicando métodos descriptivos e inferenciales, modelos de regresión y Machine Learning con el lenguaje R en RStudio.": "A statistical analysis of open KGS data, applying descriptive and inferential methods, regression models and Machine Learning with the R language in RStudio.",
    "Resultados globales del KGS": "Global KGS Results", "Alcance e impacto del proyecto": "Project Scope and Impact",
    "Registros de concesiones": "Lease Records", "Modelos de regresión": "Regression models",
    "Predicción avanzada": "Advanced Prediction", "Computación científica": "Scientific Computing",
    "Año del proyecto": "Project Year", "Integración KGS": "KGS Integration",
    "Herramientas geoespaciales": "Geospatial Tools", "Enfoque académico": "Academic Focus",
    "Recorrido del análisis": "Analysis Journey", "Del dato crudo a la predicción": "From raw data to prediction",
    "El proyecto se estructura en etapas estadísticas, desde la caracterización descriptiva de las concesiones hasta los modelos predictivos de Machine Learning.": "The project is structured in statistical stages, from the descriptive characterization of leases to the predictive Machine Learning models.",
    "Planteamiento del problema, ubicación geográfica y objetivos del estudio.": "Problem statement, geographic location and objectives of the study.",
    "Metodología, tablas de variables e indicadores, y distribución de cada variable.": "Methodology, variable and indicator tables, and distribution of each variable.",
    "Pruebas de hipótesis y análisis inferencial aplicado a las concesiones.": "Hypothesis testing and inferential analysis applied to the leases.",
    "Regresiones simples (lineal, potencial, exponencial, logarítmica, polinómica) y múltiple 3D.": "Simple regressions (linear, potential, exponential, logarithmic, polynomial) and 3D multiple.",
    "Modelos predictivos de profundidad y producción a partir de datos del KGS.": "Predictive models of depth and production from KGS data.",
    "Distribución geográfica de los arrendamientos con filtros por estado operativo.": "Geographic distribution of leases with filters by operational status.",
    "Propósito": "Purpose", "Misión & Visión": "Mission & Vision", "Misión": "Mission", "Visión": "Vision",
    "Como estudiantes de Ingeniería en Petróleos de la Universidad Central del Ecuador, aplicamos la estadística como herramienta fundamental para analizar los arrendamientos de petróleo y gas registrados en Kansas, contribuyendo a la toma de decisiones informadas en el ámbito energético y profesional.": "As Petroleum Engineering students at the Central University of Ecuador, we apply statistics as a fundamental tool to analyze the oil and gas leases recorded in Kansas, contributing to informed decision-making in the energy and professional sphere.",
    "Producir un análisis estadístico completo y reproducible que integre estadística descriptiva, inferencial, modelos de regresión y Machine Learning, constituyendo un recurso académico de referencia para la comprensión y gestión de recursos energéticos.": "To produce a complete and reproducible statistical analysis integrating descriptive and inferential statistics, regression models and Machine Learning, serving as a reference academic resource for understanding and managing energy resources.",
    "Contexto del proyecto": "Project Context",
    "Planteamiento del problema, mapa de ubicación geográfica y objetivos del análisis estadístico de los arrendamientos de petróleo y gas en Kansas.": "Problem statement, geographic location map and objectives of the statistical analysis of oil and gas leases in Kansas.",
    "01 · Planteamiento": "01 · Statement", "Planteamiento del problema": "Problem statement",
    "Los arrendamientos de petróleo y gas en Kansas son concesiones donde propietarios de tierras ceden derechos mineros para la exploración y producción de hidrocarburos. Aplicando métodos estadísticos, este proyecto analiza su distribución, estado operativo y tendencias para comprender mejor la gestión de estos recursos energéticos.": "Oil and gas leases in Kansas are concessions where landowners transfer mineral rights for hydrocarbon exploration and production. Using statistical methods, this project analyzes their distribution, operational status and trends to better understand the management of these energy resources.",
    "Datos abiertos de arrendamientos de petróleo y gas publicados por el Kansas Geological Survey (KGS) a través de ArcGIS Hub.": "Open data on oil and gas leases published by the Kansas Geological Survey (KGS) through ArcGIS Hub.",
    "02 · Ubicación": "02 · Location", "Ubicación geográfica": "Geographic Location",
    "Visualización del área de estudio de las concesiones de petróleo y gas en el estado de Kansas.": "Visualization of the study area of oil and gas leases in the state of Kansas.",
    "03 · Objetivos": "03 · Objectives", "Objetivos del análisis": "Analysis Objectives",
    "Objetivo general": "General Objective",
    "Aplicar la estadística y técnicas de Machine Learning para analizar los arrendamientos de petróleo y gas registrados en Kansas, mediante el uso de herramientas computacionales.": "To apply statistics and Machine Learning techniques to analyze the oil and gas leases recorded in Kansas, through the use of computational tools.",
    "Objetivos específicos": "Specific Objectives",
    "Conocer la situación actual de los arrendamientos a través de sus características más importantes y medidas estadísticas.": "Understand the current state of the leases through their most important characteristics and statistical measures.",
    "Emplear un modelo de probabilidad para establecer conclusiones sobre el estado, la extensión y la localización a partir de los resultados de muestra.": "Use a probability model to draw conclusions about the status, extent and location from the sample results.",
    "Deducir relaciones entre variables del registro del Kansas Geological Survey con el fin de realizar estimaciones.": "Deduce relationships between variables from the Kansas Geological Survey record in order to make estimations.",
    "Visualización geoespacial": "Geospatial Visualization",
    "Explora los arrendamientos de petróleo y gas en Kansas. Visualiza la distribución geográfica y consulta los registros con filtros por estado operativo.": "Explore the oil and gas leases in Kansas. Visualize the geographic distribution and query the records with filters by operational status.",
    "Datos obtenidos del Kansas Geological Survey · Procesados con R y QGIS": "Data from the Kansas Geological Survey · Processed with R and QGIS",
    "Caracterización de datos": "Data Characterization",
    "Metodología, tablas de variables e indicadores, y distribución de cada variable cualitativa y cuantitativa del dataset de arrendamientos.": "Methodology, variable and indicator tables, and distribution of each qualitative and quantitative variable in the lease dataset.",
    "Metodología estadística": "Statistical Methodology", "Población, individuo y muestra": "Population, individual and sample",
    "Definición formal de los elementos del estudio, en su forma textual y simbólica.": "Formal definition of the study elements, in textual and symbolic form.",
    "Población": "Population", "Individuo": "Individual", "Muestra": "Sample", "Caso de estudio": "Case study", "Textual": "Textual",
    "Todos los arrendamientos de petróleo y gas registrados en Kansas.": "All oil and gas leases registered in Kansas.",
    "Cada arrendamiento de petróleo y gas registrado en la base de datos.": "Each oil and gas lease recorded in the database.",
    "Subconjunto representativo de arrendamientos en Kansas utilizados para el análisis estadístico.": "Representative subset of leases in Kansas used for the statistical analysis.",
    "Cada arrendamiento de petróleo y gas registrado en el dataset.": "Each oil and gas lease recorded in the dataset.",
    "U = {x | x ∈ Arrendamientos ∧ Ubicación(x) ∈ Kansas}": "U = {x | x ∈ Leases ∧ Location(x) ∈ Kansas}",
    "M = {x | x ∈ Arrendamientos ∧ Sistema(x) ∈ KGS}": "M = {x | x ∈ Leases ∧ System(x) ∈ KGS}",
    ", donde i = 1, 2, 3, ..., +∞": ", where i = 1, 2, 3, ..., +∞",
    ", donde i = 1, 2, 3, ..., 47.758": ", where i = 1, 2, 3, ..., 47,758",
    "Documentación": "Documentation", "Tablas de variables e indicadores": "Variable and indicator tables",
    "Catálogo completo de las 24 variables del dataset y los indicadores estadísticos descriptivos calculados.": "Complete catalog of the 24 dataset variables and the computed descriptive statistical indicators.",
    "Abrir tabla de variables": "Open variables table",
    "Fuente: Elaboración propia a partir de datos de Kansas Geological Survey (KGS), 2026.": "Source: Own elaboration based on Kansas Geological Survey (KGS) data, 2026.",
    "Dataset (47.757 registros)": "Dataset (47,757 records)",
    "Indicadores calculados sobre los 47.757 registros del dataset (KGS). Se incluyen únicamente las variables cuantitativas · Equipo FIGEMPA, UCE 2026.": "Indicators computed over the 47,757 dataset records (KGS). Only quantitative variables are included · FIGEMPA Team, UCE 2026.",
    "Variable": "Variable", "Nombre Original": "Original Name", "Nombre": "Name", "Código": "Code", "Descripción": "Description", "Tipo": "Type", "Subtipo": "Subtype",
    "Dominio": "Domain", "Rango": "Range", "Instrumento": "Instrument", "Unidad": "Unit", "Escala": "Scale",
    "Tendencia central": "Central tendency", "Media": "Mean", "Mediana": "Median", "Moda": "Mode",
    "Dispersión": "Dispersion", "Desv. est.": "Std. dev.", "Coef. var.": "CV", "Forma": "Shape",
    "Asimetría": "Skewness", "Curtosis": "Kurtosis", "Outliers": "Outliers",
    "Cuantitativa": "Quantitative", "Cualitativa": "Qualitative",
    "Discreta": "Discrete", "Continua": "Continuous", "Nominal": "Nominal", "Ordinal": "Ordinal",
    "Proporción": "Proportion", "Intervalo": "Interval", "Razón": "Ratio",
    "Ninguna": "None", "Pies": "Feet", "Barriles": "Barrels", "Barriles/año": "Barrels/year", "Grados": "Degrees", "Años": "Years",
    "Registro administrativo": "Administrative record", "Sensores / Ingeniería": "Sensors / Engineering",
    "Registro operativo": "Operational record", "Cálculo derivado": "Derived calculation", "GPS / SIG": "GPS / GIS",
    "SIG": "GIS", "Registro geológico": "Geological record", "Geología": "Geology",
    "Cálculo estadístico": "Statistical calculation", "Cálculo temporal": "Temporal calculation",
    "Identificador del Pozo": "Well Identifier", "Profundidad del Pozo": "Well Depth", "Producción Acumulada": "Cumulative Production",
    "Producción Promedio Anual": "Avg Annual Production", "Latitud": "Latitude", "Longitud": "Longitude",
    "Años Activo": "Years Active", "Sección": "Section", "Código de Condado": "County Code", "Código de Estado": "State Code",
    "Township": "Township", "Range": "Range", "Produce Petróleo": "Produces Oil", "Produce Gas": "Produces Gas",
    "Nombre del Operador": "Operator Name", "Nombre del Campo": "Field Name", "Formación Productora": "Producing Formation",
    "Fuente de Coordenadas": "Coordinate Source", "Nivel de Producción": "Production Level", "Nivel de Profundidad": "Depth Level",
    "Etapa de Vida": "Life Stage", "Nivel de Producción Promedio": "Avg Production Level", "Dirección Township": "Township Direction",
    "Dirección Range": "Range Direction", "Estado Operacional": "Operational Status",
    "Identificador único del pozo o registro.": "Unique identifier of the well or record.",
    "Profundidad total del pozo perforado.": "Total depth of the drilled well.",
    "Producción total acumulada del pozo.": "Total cumulative production of the well.",
    "Producción promedio anual del pozo.": "Average annual production of the well.",
    "Coordenada geográfica de latitud del pozo.": "Geographic latitude coordinate of the well.",
    "Coordenada geográfica de longitud del pozo.": "Geographic longitude coordinate of the well.",
    "Tiempo total en años que el pozo ha estado activo.": "Total time in years the well has been active.",
    "Sección geográfica dentro del sistema de referencia.": "Geographic section within the reference system.",
    "Código numérico del condado.": "Numeric county code.", "Código numérico del estado.": "Numeric state code.",
    "Unidad territorial del sistema de tierras públicas.": "Territorial unit of the public land system.",
    "Rango geográfico dentro del sistema PLSS.": "Geographic range within the PLSS system.",
    "Indica si el pozo produce petróleo.": "Indicates whether the well produces oil.",
    "Indica si el pozo produce gas.": "Indicates whether the well produces gas.",
    "Empresa operadora del pozo.": "Operating company of the well.", "Nombre del campo petrolero.": "Name of the oil field.",
    "Formación geológica productora.": "Producing geological formation.", "Origen de los datos geográficos.": "Origin of the geographic data.",
    "Categoría de producción del pozo.": "Production category of the well.", "Categoría de profundidad del pozo.": "Depth category of the well.",
    "Clasificación del ciclo de vida del pozo.": "Classification of the well life cycle.", "Categoría de producción promedio.": "Average production category.",
    "Dirección cardinal del township.": "Cardinal direction of the township.", "Dirección cardinal del rango.": "Cardinal direction of the range.",
    "Clasificación de variables": "Variable Classification", "Variables cualitativas": "Qualitative Variables",
    "Clasificación de atributos no numéricos que definen la procedencia técnica y operativa.": "Classification of non-numeric attributes that define technical and operational origin.",
    "Nominales": "Nominals", "Ordinales": "Ordinals", "Discretas": "Discrete", "Continuas": "Continuous",
    "Sin orden jerárquico": "No hierarchical order", "Con orden jerárquico definido": "Defined hierarchical order",
    "Valores enteros contables": "Integer countable values", "Valores numéricos en rango real": "Numeric values in real range",
    "Variables cuantitativas": "Quantitative Variables",
    "Mediciones numéricas y parámetros operativos extraídos de la base de datos de arrendamientos.": "Numeric measurements and operational parameters extracted from the lease database.",
    "Inferencia y probabilidad": "Inference and probability",
    "Pruebas de hipótesis y análisis inferencial aplicado a las variables de los arrendamientos de petróleo y gas, para establecer conclusiones sobre la población a partir de la muestra del KGS.": "Hypothesis testing and inferential analysis applied to the oil and gas lease variables, to draw conclusions about the population from the KGS sample.",
    "Variables analizadas": "Analyzed variables",
    "Atributos no numéricos sobre los que se aplican pruebas inferenciales de proporciones e independencia.": "Non-numeric attributes on which inferential tests of proportions and independence are applied.",
    "Mediciones numéricas sobre las que se aplican intervalos de confianza y pruebas de medias.": "Numeric measurements on which confidence intervals and mean tests are applied.",
    "Modelado de relaciones": "Relationship modeling",
    "Regresiones simples (lineal, potencial, exponencial, logarítmica y polinómica) y regresión múltiple 3D entre variables del dataset de arrendamientos.": "Simple regressions (linear, potential, exponential, logarithmic and polynomial) and 3D multiple regression between variables of the lease dataset.",
    "Regresión simple": "Simple Regression", "1 variable": "1 variable",
    "Relación entre una variable independiente y una dependiente bajo distintos modelos funcionales.": "Relationship between an independent and a dependent variable under different functional models.",
    "Regresión Lineal": "Linear Regression", "Regresión Potencial": "Potential Regression", "Regresión Exponencial": "Exponential Regression",
    "Regresión Logarítmica": "Logarithmic Regression", "Regresión Polinómica": "Polynomial Regression",
    "Regresión múltiple": "Multiple Regression", "n variables": "n variables",
    "Modelado conjunto de varias variables predictoras sobre una respuesta, con visualización tridimensional.": "Joint modeling of several predictor variables on a response, with three-dimensional visualization.",
    "Regresión Múltiple 3D": "3D Multiple Regression",
    "Modelado predictivo": "Predictive modeling",
    "Uso de Machine Learning para la predicción de profundidad y producción de los arrendamientos, mediante redes neuronales y regresión avanzada sobre datos del KGS.": "Use of Machine Learning for predicting lease depth and production, through neural networks and advanced regression on KGS data.",
    "El análisis de datos geoespaciales mediante Machine Learning permite procesar grandes volúmenes de registros históricos para predecir variables operativas críticas en los arrendamientos de Kansas.": "Geospatial data analysis through Machine Learning enables processing large volumes of historical records to predict critical operational variables in Kansas leases.",
    "02 · Objetivo": "02 · Objective", "Objetivo del modelado": "Modeling Objective",
    "Desarrollar modelos de Machine Learning basados en redes neuronales que permitan clasificar y predecir parámetros operativos a partir de datos del Kansas Geological Survey, apoyando la toma de decisiones informadas en proyectos de recursos energéticos.": "Develop neural network-based Machine Learning models to classify and predict operational parameters from Kansas Geological Survey data, supporting informed decision-making in energy resource projects.",
    "03 · Metodología": "03 · Methodology", "Metodología de aprendizaje": "Learning Methodology",
    "Flujo de trabajo de preparación de datos, entrenamiento y evaluación de los modelos.": "Workflow of data preparation, training and evaluation of the models.",
    "04 · Despliegue": "04 · Deployment", "Explora en Google Colab": "Explore in Google Colab",
    "Accede a los cuadernos interactivos con la implementación completa de los modelos.": "Access the interactive notebooks with the full implementation of the models.",
    "Notebook de Regresión": "Regression Notebook", "Predicción de profundidad y producción": "Depth and production prediction",
    "Notebook de Clasificación": "Classification Notebook", "Clasificación de parámetros operativos": "Classification of operational parameters",
    "05 · Conclusión": "05 · Conclusion", "Conclusión": "Conclusion",
    "Se ha logrado implementar modelos de Machine Learning capaces de analizar y predecir variables clave de los arrendamientos en Kansas, demostrando el valor de las técnicas predictivas aplicadas a datos geoespaciales del sector energético.": "Machine Learning models capable of analyzing and predicting key lease variables in Kansas have been successfully implemented, demonstrating the value of predictive techniques applied to geospatial data in the energy sector.",
    "Ecosistema tecnológico": "Technology Ecosystem", "Stack del proyecto": "Project Stack",
    "Ecosistema operativo para el procesamiento de datos geoespaciales y el modelado estadístico del proyecto.": "Operational ecosystem for geospatial data processing and statistical modeling of the project.",
    "Integramos plataformas de análisis y desarrollo como Posit Cloud, RStudio, Google Colab, VS Code y LaTeX, junto con lenguajes como HTML5, CSS y JavaScript. Accedemos a datos científicos de Kaggle y, para el análisis geoespacial, usamos QGIS, ArcGIS y Google Earth. La colaboración y difusión se apoya en GitHub, Google Drive y RPubs.": "We integrate analysis and development platforms such as Posit Cloud, RStudio, Google Colab, VS Code and LaTeX, along with languages like HTML5, CSS and JavaScript. We access scientific data from Kaggle and, for geospatial analysis, we use QGIS, ArcGIS and Google Earth. Collaboration and dissemination rely on GitHub, Google Drive and RPubs.",
    "Entorno de análisis estadístico en R.": "Statistical analysis environment in R.",
    "Notebooks para modelos de ML en la nube.": "Notebooks for ML models in the cloud.",
    "Publicación de reportes estadísticos.": "Publishing of statistical reports.",
    "Análisis y geolocalización de datos.": "Data analysis and geolocation.",
    "Datasets y referencias científicas.": "Datasets and scientific references.",
    "Control de versiones y despliegue.": "Version control and deployment.",
    "Repositorio de datasets y recursos.": "Repository of datasets and resources.",
    "Desarrollo web del sitio del proyecto.": "Web development of the project site.",
    "El equipo": "The Team",
    "Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA) · Universidad Central del Ecuador.": "Faculty of Engineering in Geology, Mines, Petroleum and Environmental (FIGEMPA) · Central University of Ecuador.",
    "Quiénes somos": "Who we are", "Estudiantes de Ingeniería en Petróleos": "Petroleum Engineering Students",
    "Somos estudiantes de segundo semestre de la Universidad Central del Ecuador, pertenecientes a la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA), en la carrera de Ingeniería en Petróleos. En el marco de la asignatura de Estadística, presentamos este proyecto con el objetivo de ofrecer información clara, pertinente y accesible para quienes se interesan en esta área del conocimiento.": "We are second-semester students at the Central University of Ecuador, belonging to the Faculty of Engineering in Geology, Mines, Petroleum and Environmental (FIGEMPA), in the Petroleum Engineering program. Within the framework of the Statistics course, we present this project with the goal of offering clear, pertinent and accessible information for those interested in this area of knowledge.",
    "Como futuros profesionales, aspiramos a formarnos como ingenieros comprometidos, preparados y apasionados, capaces de contribuir al desarrollo de una industria que avanza de manera constante gracias a la innovación tecnológica y al estudio científico de las energías sostenibles.": "As future professionals, we aspire to become committed, prepared and passionate engineers, capable of contributing to the development of an industry that advances constantly thanks to technological innovation and the scientific study of sustainable energy.",
    "Confiamos en el valor del aprendizaje conjunto y en la importancia de compartir saberes. Por ello, este trabajo no solo constituye un componente de nuestra formación académica, sino también un aporte para fomentar una comprensión más sólida de un campo tan dinámico y relevante en el contexto actual.": "We trust in the value of joint learning and the importance of sharing knowledge. Therefore, this work not only constitutes a component of our academic training but also a contribution to fostering a more solid understanding of such a dynamic and relevant field in the current context.",
    "Nuestro equipo · Grupo 1": "Our team · Group 1", "Integrantes": "Members", "Nuestra ubicación": "Our Location"
  };

  const I18N_ORIG = new Map();
  function i18nNodes() {
    const out = [];
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    let n;
    while ((n = w.nextNode())) {
      const p = n.parentElement;
      if (!p) continue;
      if (p.closest('script, style, noscript, [data-i18n], .lang-btn, .dt-set, .dt-code')) continue;
      if (!n.nodeValue || !n.nodeValue.trim()) continue;
      out.push(n);
    }
    return out;
  }
  function i18nButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach((b) => {
      b.innerHTML = '<b class="' + (lang === 'es' ? 'on' : '') + '">ES</b><span>/</span><b class="' + (lang === 'en' ? 'on' : '') + '">EN</b>';
      b.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    });
  }
  function i18nApply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (I18N_H[k]) el.innerHTML = I18N_H[k][lang] || I18N_H[k].es;
    });
    i18nNodes().forEach((node) => {
      if (!I18N_ORIG.has(node)) I18N_ORIG.set(node, node.nodeValue);
      const original = I18N_ORIG.get(node);
      if (lang === 'en') {
        const m = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
        const core = m[2].replace(/\s+/g, ' ');
        const t = I18N_T[core];
        node.nodeValue = (t != null) ? (m[1] + t + m[3]) : original;
      } else {
        node.nodeValue = original;
      }
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
    i18nButtons(lang);
  }
  function i18nGet() { try { return localStorage.getItem('lang') || 'es'; } catch (e) { return 'es'; } }

  i18nApply(i18nGet());
  document.querySelectorAll('.lang-btn').forEach((b) => {
    b.addEventListener('click', () => i18nApply(i18nGet() === 'es' ? 'en' : 'es'));
  });

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (window.innerWidth <= 920) {
          nav.classList.remove("open");
          toggle.classList.remove("open");
        }
      });
    });
  }

  const banner = document.getElementById("academicBanner");
  const closeBanner = document.getElementById("closeBanner");
  if (closeBanner && banner) {
    closeBanner.addEventListener("click", () => banner.classList.add("banner-hidden"));
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  (function animateCounters() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll(".highlight-value[data-count-target]");
    const run = (el) => {
      const target = parseFloat(el.getAttribute("data-count-target"));
      const suffix = el.getAttribute("data-count-suffix") || "";
      const comma = el.hasAttribute("data-count-comma");
      const fmt = (v) => (comma ? Math.round(v).toLocaleString("en-US") : String(Math.round(v))) + suffix;
      if (reduce || !isFinite(target)) { el.textContent = fmt(target); return; }
      const dur = 1600, start = performance.now();
      el.textContent = fmt(0);
      const frame = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(frame); else el.textContent = fmt(target);
      };
      requestAnimationFrame(frame);
    };
    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((en) => { if (en.isIntersecting) { run(en.target); obs.unobserve(en.target); } });
      },
      { threshold: 0.4 }
    );
    els.forEach((el) => io.observe(el));
  })();
})();
