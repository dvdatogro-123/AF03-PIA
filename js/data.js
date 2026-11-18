/* ---------- GLOSARIO ---------- */
const GLOSSARY = {
  /* ===== INTERNET ===== */
  arpanet: { t: "ARPANET", c: "internet", d: "Red creada por la agencia ARPA (Departamento de Defensa de EE. UU.) que conectó las primeras computadoras de universidades y centros de investigación. Es la antecesora directa de Internet." },
  paquetes: { t: "Conmutación de paquetes", c: "internet", d: "Técnica que divide la información en trozos pequeños (paquetes) que viajan por rutas distintas y se reensamblan en el destino. Hace la red más eficiente y resistente a fallas." },
  protocolo: { t: "Protocolo", c: "internet", d: "Conjunto de reglas acordadas que permite a dos dispositivos comunicarse: cómo se formatean los mensajes, en qué orden se envían y qué hacer si hay errores." },
  "tcp-ip": { t: "TCP/IP", c: "internet", d: "Familia de protocolos de Internet. IP direcciona y envía los paquetes; TCP verifica que lleguen completos y en orden. Es el 'idioma común' de la red." },
  email: { t: "Correo electrónico", c: "internet", d: "Sistema para enviar mensajes entre usuarios de equipos conectados. El símbolo @ separa el nombre del usuario del servidor donde está su buzón (usuario@servidor)." },
  hipertexto: { t: "Hipertexto", c: "internet", d: "Texto con enlaces que llevan a otros documentos, permitiendo navegar saltando de una idea a otra sin seguir un orden lineal." },
  www: { t: "World Wide Web (WWW)", c: "internet", d: "Sistema de páginas enlazadas que se consulta con un navegador. No es sinónimo de Internet: la Web es un servicio que funciona sobre la infraestructura de Internet." },
  cern: { t: "CERN", c: "internet", d: "Organización Europea para la Investigación Nuclear (Suiza). Ahí trabajaba Tim Berners-Lee cuando ideó la Web." },
  html: { t: "HTML", c: "internet", d: "HyperText Markup Language. Lenguaje de marcado que define la estructura y apariencia básica de una página web: títulos, párrafos, enlaces, imágenes, etc." },
  http: { t: "HTTP", c: "internet", d: "HyperText Transfer Protocol. Protocolo con el que el navegador solicita páginas a un servidor y este responde." },
  url: { t: "URL", c: "internet", d: "Dirección única de un recurso en la Web, por ejemplo https://sitio.com/pagina." },
  navegador: { t: "Navegador web", c: "internet", d: "Programa que solicita, interpreta y muestra páginas web (Chrome, Firefox, Safari, Edge)." },
  gui: { t: "Interfaz gráfica (GUI)", c: "internet", d: "Forma de usar un programa mediante ventanas, imágenes, iconos y clics, en lugar de escribir comandos de texto." },
  ncsa: { t: "NCSA", c: "internet", d: "National Center for Supercomputing Applications, centro de la Universidad de Illinois donde se desarrolló Mosaic." },
  directorio: { t: "Directorio web", c: "internet", d: "Catálogo de sitios organizados por categorías y mantenido por personas, a diferencia de un buscador automático." },
  ecommerce: { t: "E-commerce", c: "internet", d: "Comercio electrónico: compra y venta de productos o servicios a través de Internet." },
  javascript: { t: "JavaScript", c: "internet", d: "Lenguaje de programación que se ejecuta en el navegador y vuelve interactivas las páginas (menús, formularios, animaciones)." },
  php: { t: "PHP", c: "internet", d: "Lenguaje que se ejecuta en el servidor y genera páginas distintas según lo que pida cada usuario." },
  "web-dinamica": { t: "Web dinámica", c: "internet", d: "Páginas cuyo contenido se genera o cambia según el usuario o sus acciones (carrito de compras, inicio de sesión), en contraste con páginas estáticas que siempre muestran lo mismo." },
  ieee: { t: "IEEE", c: "internet", d: "Instituto de Ingenieros Eléctricos y Electrónicos. Organización internacional que publica estándares técnicos." },
  wifi: { t: "Wi-Fi / 802.11", c: "internet", d: "802.11 es el estándar del IEEE para redes locales inalámbricas. 'Wi-Fi' es la marca comercial de los equipos certificados con ese estándar." },
  pagerank: { t: "PageRank", c: "internet", d: "Algoritmo de Google que puntúa la importancia de una página según cuántos enlaces recibe y de qué páginas vienen. Un enlace funciona como un 'voto de confianza'." },
  indexar: { t: "Indexar", c: "internet", d: "Recorrer páginas web y organizarlas en un enorme índice para poder encontrarlas en milisegundos cuando alguien busca." },
  p2p: { t: "Peer-to-Peer (P2P)", c: "internet", d: "Red en la que los equipos se conectan directamente entre sí y comparten archivos, sin depender de un único servidor central." },
  mp3: { t: "MP3", c: "internet", d: "Formato de audio comprimido que reduce mucho el tamaño de una canción con poca pérdida de calidad perceptible." },
  dotcom: { t: "Burbuja dot-com", c: "internet", d: "Auge especulativo de empresas de Internet a finales de los 90, cuyo valor en bolsa superaba por mucho a sus ingresos reales. Estalló en 2000." },
  wiki: { t: "Wiki", c: "internet", d: "Sitio cuyo contenido puede ser escrito y editado por sus propios usuarios, con historial de cambios para revertir errores." },
  voip: { t: "VoIP", c: "internet", d: "Voz sobre IP: transmitir llamadas y videollamadas por Internet en lugar de usar la línea telefónica tradicional." },
  cms: { t: "CMS", c: "internet", d: "Sistema de gestión de contenidos: software que permite crear y administrar un sitio web sin programar cada página a mano." },
  blog: { t: "Blog", c: "internet", d: "Sitio con publicaciones ordenadas de la más reciente a la más antigua, como un diario en línea." },
  web2: { t: "Web 2.0", c: "internet", d: "Etapa en la que los usuarios dejan de ser solo lectores y crean contenido y colaboran (redes sociales, blogs, wikis, videos)." },
  streaming: { t: "Streaming", c: "internet", d: "Reproducir audio o video mientras se descarga, sin esperar a tener el archivo completo." },
  microblogging: { t: "Microblogging", c: "internet", d: "Publicar mensajes muy breves y frecuentes. Twitter limitaba inicialmente cada mensaje a 140 caracteres." },
  cloud: { t: "Cloud Computing", c: "internet", d: "Usar servidores, almacenamiento y software de otra empresa a través de Internet, pagando según el consumo en vez de comprar equipos propios." },
  aws: { t: "AWS", c: "internet", d: "Amazon Web Services, la plataforma de servicios en la nube de Amazon." },
  ec2: { t: "EC2", c: "internet", d: "Elastic Compute Cloud: servicio de AWS que renta servidores virtuales por hora." },
  s3: { t: "S3", c: "internet", d: "Simple Storage Service: servicio de AWS para guardar archivos en la nube de forma escalable." },
  opensource: { t: "Código abierto", c: "internet", d: "Software cuyo código fuente es público y puede ser estudiado, modificado y redistribuido según su licencia." },
  html5: { t: "HTML5", c: "internet", d: "Versión moderna de HTML con soporte nativo de video, audio, gráficos (canvas) y geolocalización, sin necesidad de plugins." },
  plugin: { t: "Plugin", c: "internet", d: "Complemento que se instala en el navegador para añadir funciones, como el reproductor Flash." },
  flash: { t: "Flash", c: "internet", d: "Tecnología de Adobe para animaciones y video en la web. Requería plugin y fue reemplazada por HTML5; su soporte terminó en 2020." },
  blockchain: { t: "Blockchain", c: "internet", d: "Cadena de bloques: registro de transacciones copiado en muchos equipos, donde cada bloque queda enlazado criptográficamente al anterior, por lo que alterar el pasado es prácticamente imposible." },
  doblegasto: { t: "Doble gasto", c: "internet", d: "Problema de gastar la misma moneda digital dos veces, ya que un archivo se puede copiar. Bitcoin lo evita con una red que valida y ordena todas las transacciones." },
  genesis: { t: "Bloque génesis", c: "internet", d: "Primer bloque de una cadena de bloques. El de Bitcoin se creó el 3 de enero de 2009." },
  descentralizado: { t: "Descentralizado", c: "internet", d: "Sin una autoridad central que controle el sistema; lo mantienen muchos participantes en conjunto." },
  minar: { t: "Minar", c: "internet", d: "Resolver cálculos computacionales para validar bloques de transacciones en Bitcoin y recibir una recompensa; esto protege la red contra fraudes." },

  /* ===== XML ===== */
  xml: { t: "XML", c: "xml", d: "eXtensible Markup Language. Lenguaje de marcado basado en texto para describir datos con etiquetas que tú mismo defines. Es un estándar del W3C." },
  metalenguaje: { t: "Meta-lenguaje", c: "xml", d: "Lenguaje para crear otros lenguajes. XML no define etiquetas fijas: da las reglas para que cada industria invente las suyas." },
  w3c: { t: "W3C", c: "xml", d: "World Wide Web Consortium, organización internacional que desarrolla los estándares de la Web (HTML, CSS, XML, entre otros)." },
  sgml: { t: "SGML", c: "xml", d: "Standard Generalized Markup Language (ISO, 1986). Lenguaje de marcado muy potente pero tan complejo que casi no se usó en la Web. XML es su versión simplificada." },
  iso: { t: "ISO", c: "xml", d: "Organización Internacional de Normalización, que publica normas técnicas reconocidas en todo el mundo." },
  semantica: { t: "Semántica", c: "xml", d: "El significado de los datos. En XML la etiqueta dice qué es el dato (por ejemplo, <precio>), no cómo se ve." },
  presentacion: { t: "Presentación", c: "xml", d: "La apariencia visual de la información (colores, tamaños, posición). HTML se ocupa de esto; XML no." },
  unicode: { t: "Unicode", c: "xml", d: "Estándar que asigna un código a los caracteres de prácticamente todos los idiomas del mundo (acentos, ñ, alfabetos no latinos, emojis)." },
  utf8: { t: "UTF-8", c: "xml", d: "Codificación de Unicode muy usada en la web. Permite guardar acentos y eñes sin errores. Es la codificación recomendada para XML." },
  firewall: { t: "Firewall", c: "xml", d: "Sistema de seguridad que filtra el tráfico de red. Al ser texto plano que viaja por HTTP, XML suele atravesarlo sin ser bloqueado." },
  propietario: { t: "Software propietario", c: "xml", d: "Programa cuyo código y formatos pertenecen a una empresa, y que normalmente requiere licencia. Los formatos propietarios atan al usuario a ese software." },
  interoperabilidad: { t: "Interoperabilidad", c: "xml", d: "Capacidad de que sistemas distintos (lenguajes, sistemas operativos, empresas) intercambien información y se entiendan." },
  autodescriptivo: { t: "Autodescriptivo", c: "xml", d: "Que el propio archivo explica su contenido: cada dato va dentro de una etiqueta que dice qué representa." },
  agnostico: { t: "Agnóstico", c: "xml", d: "Que no depende de una plataforma concreta: funciona igual en cualquier sistema operativo, hardware o nube." },
  etiqueta: { t: "Etiqueta (tag)", c: "xml", d: "Marca entre ángulos como <nombre> que abre un elemento, y </nombre> que lo cierra." },
  elemento: { t: "Elemento", c: "xml", d: "Unidad básica de XML: una etiqueta de apertura, su contenido y su etiqueta de cierre. Puede contener texto u otros elementos." },
  nodo: { t: "Nodo", c: "xml", d: "Cada pieza del árbol XML: elementos, atributos, textos o comentarios. Los elementos que contienen otros son nodos padre; los que quedan dentro son hijos." },
  raiz: { t: "Nodo raíz", c: "xml", d: "Elemento único que contiene a todos los demás. Todo documento XML debe tener exactamente uno." },
  prologo: { t: "Prólogo", c: "xml", d: "Declaración inicial <?xml version=\"1.0\" encoding=\"UTF-8\"?> que indica la versión de XML y la codificación de caracteres." },
  atributo: { t: "Atributo", c: "xml", d: "Par nombre=\"valor\" dentro de la etiqueta de apertura. Se usa para identificadores y metadatos cortos, como id=\"1\"." },
  metadatos: { t: "Metadatos", c: "xml", d: "'Datos sobre los datos': información que describe o identifica otro dato, como un id, una moneda o un idioma." },
  entidad: { t: "Entidad", c: "xml", d: "Secuencia como &lt; o &amp; que representa un carácter reservado de XML para que no se confunda con el marcado." },
  comentario: { t: "Comentario", c: "xml", d: "Nota para personas, escrita entre <!-- y -->. El sistema la ignora al procesar el documento." },
  bienformado: { t: "Bien formado", c: "xml", d: "Documento que cumple las reglas de sintaxis de XML: etiquetas cerradas, bien anidadas, un solo raíz, atributos con comillas. Si no, no se puede procesar." },
  valido: { t: "Válido", c: "xml", d: "Documento bien formado que además respeta un esquema (DTD o XSD) que define qué elementos, orden y tipos de datos son permitidos." },
  esquema: { t: "Esquema", c: "xml", d: "Documento que describe la estructura permitida de un XML: qué elementos existen, en qué orden y de qué tipo son." },
  xsd: { t: "XSD", c: "xml", d: "XML Schema Definition. Lenguaje (escrito en XML) para definir esquemas con tipos de datos precisos: enteros, fechas, textos con patrón, etc." },
  dtd: { t: "DTD", c: "xml", d: "Document Type Definition. Forma más antigua y sencilla de definir qué elementos y atributos puede tener un XML; no maneja tipos de datos como XSD." },
  xpath: { t: "XPath", c: "xml", d: "Lenguaje de consulta para localizar nodos dentro de un XML mediante rutas, como //producto[@id='2']/nombre." },
  xslt: { t: "XSLT", c: "xml", d: "Lenguaje de transformación que convierte un XML en otro formato (HTML, texto, otro XML) aplicando reglas llamadas plantillas." },
  soap: { t: "SOAP", c: "xml", d: "Simple Object Access Protocol. Protocolo de mensajería entre sistemas basado en XML, con reglas estrictas; muy usado en banca y telecomunicaciones." },
  json: { t: "JSON", c: "xml", d: "JavaScript Object Notation. Formato de texto ligero con pares clave:valor, muy usado para intercambiar datos entre aplicaciones web." },
  rest: { t: "API REST", c: "xml", d: "Forma de ofrecer servicios web mediante URLs y métodos HTTP. Normalmente intercambia datos en JSON." },
  api: { t: "API", c: "xml", d: "Application Programming Interface: conjunto de funciones o servicios que un programa ofrece para que otros se comuniquen con él." },
  verboso: { t: "Verboso", c: "xml", d: "Que necesita muchas palabras o caracteres para expresar lo mismo. En XML, cada dato lleva etiqueta de apertura y de cierre." },
  cfdi: { t: "CFDI", c: "xml", d: "Comprobante Fiscal Digital por Internet: la factura electrónica en México. Es un archivo XML con sello digital que el SAT valida." },
  sat: { t: "SAT", c: "xml", d: "Servicio de Administración Tributaria, la autoridad fiscal de México." },
  ooxml: { t: "Office Open XML", c: "xml", d: "Formato de los archivos .docx, .xlsx y .pptx: un paquete ZIP que contiene varios archivos XML (texto, estilos, hojas, relaciones)." },
  svg: { t: "SVG", c: "xml", d: "Scalable Vector Graphics. Formato de imágenes vectoriales escrito en XML: se escala sin perder calidad y se puede editar como texto." },
  rss: { t: "RSS", c: "xml", d: "Formato XML para publicar listas de contenidos actualizados (episodios de podcast, noticias) que las apps pueden leer y suscribirse." },
  sitemap: { t: "Sitemap", c: "xml", d: "Archivo sitemap.xml que lista las páginas de un sitio para que buscadores como Google las encuentren e indexen." },
  maven: { t: "Maven", c: "xml", d: "Herramienta para gestionar proyectos Java. Su configuración y dependencias se describen en un archivo pom.xml." },
  parser: { t: "Parser", c: "xml", d: "Programa que lee un documento (como XML), verifica su sintaxis y lo convierte en una estructura que el software puede recorrer." },
  arbol: { t: "Modelo en árbol", c: "xml", d: "Organización jerárquica: un raíz del que cuelgan hijos, que a su vez tienen hijos. Los nodos sin hijos se llaman hojas." },
  basedatos: { t: "Base de datos", c: "xml", d: "Sistema organizado para guardar y consultar información. Cada fabricante suele usar su propio formato interno." }
};

/* ---------- HISTORIA DEL INTERNET ---------- */
const STAGES = [
  {
    id: "cimientos", years: "1969 – 1983", title: "Los Cimientos", icon: "bi-diagram-3",
    intro: "Internet nació como un proyecto de investigación financiado por el Departamento de Defensa de EE. UU. La meta era conectar computadoras de distintas universidades para compartir recursos y que la red siguiera funcionando aunque una parte fallara, algo posible gracias a la [[paquetes]].",
    events: [
      { y: "1969", t: "El primer mensaje en ARPANET", d: "El 29 de octubre de 1969 se envió un mensaje entre una computadora de la UCLA y otra del Instituto de Investigación de Stanford. Querían escribir «LOGIN», pero el sistema falló tras las dos primeras letras y solo llegó «LO». Fue el primer enlace de [[arpanet]]." },
      { y: "1971", t: "Nace el correo electrónico", d: "Ray Tomlinson, ingeniero de la empresa BBN, programó el primer [[email|correo electrónico]] entre equipos conectados a la red y eligió el símbolo @ para separar al usuario del equipo donde estaba su buzón." },
      { y: "1983", t: "ARPANET adopta TCP/IP", d: "El 1 de enero de 1983 la red cambió oficialmente a [[tcp-ip]]. Este [[protocolo]] permite que redes de distinto tipo se interconecten y se entiendan, por eso se considera el nacimiento de la 'red de redes': Internet." }
    ],
    key: "Un proyecto militar y académico terminó siendo la base de la sociedad digital. Lo decisivo no fue un invento aislado, sino un estándar común (TCP/IP) que cualquiera podía adoptar."
  },
  {
    id: "web", years: "1989 – 1994", title: "El Nacimiento de la Web", icon: "bi-globe2",
    intro: "Aunque Internet ya existía, era difícil de usar y casi exclusiva de científicos. Conviene distinguir: Internet es la infraestructura (cables, equipos, protocolos); la [[www|Web]] es un servicio de páginas enlazadas que funciona sobre ella.",
    events: [
      { y: "1989 – 1991", t: "La World Wide Web", d: "Tim Berners-Lee, en el [[cern]], propuso en 1989 un sistema de documentos enlazados mediante [[hipertexto]]. Diseñó sus tres pilares: [[html]] (el lenguaje de las páginas), [[http]] (el protocolo para pedirlas) y las [[url]] (sus direcciones). En 1991 la primera página web se abrió al público." },
      { y: "1993", t: "NCSA Mosaic", d: "Desarrollado en el [[ncsa]], fue el primer [[navegador]] en popularizar la [[gui|interfaz gráfica]]: mostraba imágenes junto al texto y los enlaces se abrían con un clic. Esto hizo la Web accesible y atractiva para personas fuera del ámbito académico." },
      { y: "1994", t: "Yahoo! y Netscape Navigator", d: "Yahoo! nació como un [[directorio]] de sitios clasificados por categorías, creado por Jerry Yang y David Filo. Netscape Navigator, hecho por parte del equipo de Mosaic, se convirtió en el navegador dominante de los años 90." }
    ],
    key: "La Web convirtió una red técnica en algo que cualquier persona podía usar con un clic. La clave fue combinar tres ideas simples: enlaces, un lenguaje común y direcciones únicas."
  },
  {
    id: "comercio", years: "1995 – 1997", title: "Comercio y Conexión", icon: "bi-cart3",
    intro: "La Web pasa de ser un lugar para leer a ser un lugar para hacer cosas: comprar, interactuar y, poco después, conectarse sin cables.",
    events: [
      { y: "1995", t: "Nace el e-commerce y la web dinámica", d: "Amazon (al inicio, una librería en línea) y eBay (subastas) inauguran el [[ecommerce]] masivo. En el mismo año aparecen [[javascript]] (se ejecuta en el navegador) y [[php]] (se ejecuta en el servidor), que permiten una [[web-dinamica]] donde el contenido cambia según el usuario." },
      { y: "1997", t: "El estándar Wi-Fi", d: "El [[ieee]] aprueba el estándar 802.11, que en su primera versión alcanzaba 2 Mbps. En 1999 se acuñó la marca Wi-Fi para los equipos certificados. Sentó las bases de las redes [[wifi|inalámbricas]] que hoy cubren hogares, escuelas y ciudades." }
    ],
    key: "Dos cambios ocurren a la vez: la Web gana capacidad de 'hacer' (comprar, iniciar sesión, personalizar) y la conexión se libera de los cables."
  },
  {
    id: "busqueda", years: "1998 – 1999", title: "Búsqueda y Revolución P2P", icon: "bi-search",
    intro: "A finales de los 90 la Web crecía tan rápido que encontrar información era cada vez más difícil. Al mismo tiempo, una nueva forma de compartir archivos puso en jaque a toda una industria.",
    events: [
      { y: "1998", t: "Google y PageRank", d: "Larry Page y Sergey Brin, entonces estudiantes de Stanford, fundan Google. Su algoritmo [[pagerank|PageRank]] ordena los resultados según cuántas páginas importantes enlazan a otra, tratando los enlaces como 'votos'. Transformó cómo se [[indexar|indexa]] y se busca la información." },
      { y: "1999", t: "Napster y las redes P2P", d: "Creado por Shawn Fanning, Napster permitía que los usuarios intercambiaran archivos [[mp3]] directamente entre sus computadoras mediante una red [[p2p]]. Fue clausurado en 2001 por demandas de la industria musical, pero dejó una lección permanente: el modelo de distribución de la música debía cambiar (el camino hacia el [[streaming]] legal)." }
    ],
    key: "Google resolvió el problema de encontrar; Napster mostró que los usuarios podían distribuir contenido sin intermediarios. Ambos cambiaron reglas de negocio enteras."
  },
  {
    id: "crisis", years: "2000 – 2001", title: "Crisis y Renacimiento", icon: "bi-graph-down-arrow",
    intro: "Tras años de entusiasmo desbordado, el mercado reaccionó. La crisis fue dolorosa, pero dejó una web más madura.",
    events: [
      { y: "2000", t: "Estalla la burbuja dot-com", d: "Durante los 90 los inversionistas apostaron enormes sumas por empresas '.com' sin ingresos reales. La [[dotcom|burbuja]] estalló en 2000 y cientos de empresas quebraron. La purga dejó en pie a compañías con modelos de negocio sostenibles, como Amazon, eBay y Google." },
      { y: "2001", t: "Nace Wikipedia", d: "El 15 de enero de 2001, Jimmy Wales y Larry Sanger lanzan una enciclopedia libre que cualquiera puede editar, basada en el modelo [[wiki]]. Demostró que miles de personas desconocidas pueden construir conocimiento de calidad de forma colaborativa." }
    ],
    key: "Después de la crisis, la Web dejó de ser promesa y se volvió negocio real. Y justo en ese momento surgió la idea que definiría la siguiente etapa: el contenido lo crean los usuarios."
  },
  {
    id: "web2", years: "2003 – 2004", title: "La Era de la Web 2.0", icon: "bi-people",
    intro: "El término [[web2|Web 2.0]], popularizado por Tim O'Reilly, describe el giro en que el usuario deja de ser solo lector y se vuelve creador, comentarista y comunicador.",
    events: [
      { y: "2003", t: "Skype", d: "Popularizó las llamadas de voz y video mediante [[voip|VoIP]], permitiendo comunicación internacional a muy bajo costo." },
      { y: "2003", t: "WordPress", d: "Es un [[cms]] de [[opensource|código abierto]] que democratizó la creación de sitios web y de [[blog|blogs]]: ya no hacía falta saber programar para publicar en Internet." },
      { y: "2004", t: "Facebook", d: "Mark Zuckerberg lanzó la red social en Harvard, el 4 de febrero de 2004, primero solo para universitarios. Cambió la forma de relacionarse en línea e inició la era dorada de las redes sociales." }
    ],
    key: "La Web se vuelve social: comunicarse, publicar y relacionarse deja de requerir conocimientos técnicos."
  },
  {
    id: "nube", years: "2005 – 2006", title: "Video Masivo y la Nube", icon: "bi-cloud",
    intro: "El video, las noticias en tiempo real y la infraestructura en la nube requerían muchísima capacidad de cómputo. Esta etapa resolvió esos cuellos de botella.",
    events: [
      { y: "2005", t: "YouTube", d: "El 23 de abril de 2005 se publicó el primer video, «Me at the zoo» (apenas 19 segundos). La plataforma resolvió los problemas de infraestructura para hacer [[streaming]] de video a gran escala; Google la compró en 2006." },
      { y: "2006", t: "Twitter", d: "Introdujo el formato de [[microblogging]], con mensajes muy cortos, que cambió el consumo de noticias en tiempo real." },
      { y: "2006", t: "Amazon Web Services", d: "[[aws|AWS]] lanzó [[s3]] (almacenamiento) y [[ec2]] (servidores virtuales) bajo el modelo de pago por uso. Impulsó el [[cloud|Cloud Computing]]: una startup ya no necesitaba comprar servidores para lanzar un servicio global." }
    ],
    key: "Con la nube, montar un servicio mundial dejó de requerir millones de dólares en equipos, lo que explica la explosión de nuevas plataformas."
  },
  {
    id: "movil", years: "2007 – 2008", title: "El Paradigma Móvil", icon: "bi-phone",
    intro: "Internet salió del escritorio y pasó al bolsillo. El acceso dejó de ser un lugar al que se va para convertirse en algo que siempre se lleva.",
    events: [
      { y: "2007", t: "El iPhone", d: "Presentado en enero de 2007 y a la venta en junio, transformó el acceso a Internet hacia un entorno táctil y móvil, centrado en aplicaciones nativas (la App Store llegó en 2008)." },
      { y: "2008", t: "Android", d: "Google lanzó este sistema operativo móvil de [[opensource|código abierto]], cuyo primer teléfono salió a finales de 2008. Al poder usarlo cualquier fabricante, democratizó el acceso a smartphones en el mundo." },
      { y: "2008", t: "Borrador de HTML5", d: "El primer borrador público apareció en enero de 2008. [[html5|HTML5]] permite insertar video y audio de forma nativa en los navegadores móviles, sin [[plugin|plugins]] como [[flash|Flash]]." }
    ],
    key: "El móvil cambió el diseño web (pantallas pequeñas, táctiles) y creó el ecosistema de aplicaciones que usamos hoy."
  },
  {
    id: "descentralizacion", years: "2009", title: "La Era de la Descentralización", icon: "bi-currency-bitcoin",
    intro: "Tras una web dominada por grandes plataformas centralizadas, surge una propuesta radicalmente distinta: sistemas que funcionan sin una autoridad central.",
    events: [
      { y: "2009", t: "Bitcoin y el bloque génesis", d: "El 3 de enero de 2009, Satoshi Nakamoto (un seudónimo; su identidad se desconoce) [[minar|minó]] el [[genesis|primer bloque]] de la red Bitcoin, tras publicar la idea en 2008. Introdujo la tecnología [[blockchain]] y resolvió el problema del [[doblegasto|doble gasto]] sin necesidad de un banco intermediario, creando el primer sistema de escasez y valor digital [[descentralizado]]." }
    ],
    key: "Bitcoin abrió una conversación nueva: ¿puede una red de desconocidos mantener un registro confiable sin que nadie la controle? Ese principio inspira buena parte de la tecnología posterior."
  }
];

/* ---------- CASOS DEL LABORATORIO XML ---------- */
const CASES = [
  {
    id: "persona", title: "Caso 1 · Datos personales",
    code: `<?xml version="1.0" encoding="UTF-8"?>
<persona>
  <nombre>Ana López</nombre>
  <edad>22</edad>
  <ciudad>Monterrey</ciudad>
</persona>`,
    notes: [
      ["Simplicidad directa", "Estructura plana: un solo nivel de profundidad bajo el raíz."],
      ["Nodo contenedor", "<persona> agrupa las tres propiedades del individuo."],
      ["Soporte UTF-8", "Permite guardar el apellido «López» con tilde sin errores."]
    ],
    xpath: ["/persona/nombre", "//edad", "string(//ciudad)", "count(/persona/*)"]
  },
  {
    id: "productos", title: "Caso 2 · Catálogo comercial",
    code: `<?xml version="1.0" encoding="UTF-8"?>
<productos>
  <producto id="1">
    <nombre>Laptop</nombre>
    <precio>15000</precio>
  </producto>
  <producto id="2">
    <nombre>Impresora</nombre>
    <precio>3500</precio>
  </producto>
</productos>`,
    notes: [
      ["Patrón plural/singular", "La raíz <productos> envuelve múltiples nodos <producto>."],
      ["Identificador único", "El atributo id funciona como llave primaria para búsquedas rápidas."],
      ["Fácil importación", "Formato listo para alimentar un sistema de comercio electrónico."]
    ],
    xpath: ["//producto[@id='2']/nombre", "//producto[precio>5000]/nombre", "sum(//precio)", "//producto/@id"]
  },
  {
    id: "estudiantes", title: "Caso 3 · Padrón universitario",
    code: `<?xml version="1.0" encoding="UTF-8"?>
<estudiantes>
  <estudiante matricula="2026001">
    <nombre>María García</nombre>
    <carrera>Sistemas Computacionales</carrera>
  </estudiante>
  <estudiante matricula="2026002">
    <nombre>José Martínez</nombre>
    <carrera>Ingeniería Industrial</carrera>
  </estudiante>
</estudiantes>`,
    notes: [
      ["Control por matrícula", "Evita duplicidad aunque dos alumnos tengan el mismo nombre."],
      ["Fácil expansión", "Podemos añadir más <estudiante> o nuevos campos sin romper sistemas previos."],
      ["Interoperabilidad escolar", "Cualquier sistema (control escolar, biblioteca) puede leer el mismo archivo."]
    ],
    xpath: ["//estudiante[@matricula='2026002']/carrera", "//estudiante/nombre", "count(//estudiante)", "//carrera[contains(., 'Sistemas')]"]
  }
];

/* ---------- EJEMPLOS PARA EL VALIDADOR ---------- */
const VALIDATOR_SAMPLES = {
  ok: `<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
  <libro id="001">
    <titulo>Redes</titulo>
    <autor>Juan Pérez</autor>
  </libro>
</biblioteca>`,
  sinCierre: `<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
  <libro id="001">
    <titulo>Redes</titulo>
    <autor>Juan Pérez
  </libro>
</biblioteca>`,
  mayus: `<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
  <libro id="001">
    <Titulo>Redes</titulo>
  </libro>
</biblioteca>`,
  comillas: `<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
  <libro id=001>
    <titulo>Redes</titulo>
  </libro>
</biblioteca>`,
  cruce: `<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
  <libro>
    <titulo>Redes</libro>
  </titulo>
</biblioteca>`,
  raices: `<?xml version="1.0" encoding="UTF-8"?>
<libro>Redes</libro>
<libro>Bases de datos</libro>`,
  ampersand: `<?xml version="1.0" encoding="UTF-8"?>
<empresa>
  <nombre>Ruiz & Asociados</nombre>
</empresa>`
};


/* ---------- INTEGRANTES DEL EQUIPO ---------- */
const TEAM = [
  { nombre: "David Alonso Torres Guerrero", matricula: "2144813",
    practicas: "https://dvdatogro-123.github.io/AF6-PracticasProfesionales/",
    becas: "https://dvdatogro-123.github.io/AF7_BecasAplicables/" },
  { nombre: "Héctor Alexander Tovar González", matricula: "2144664",
    practicas: "https://alexander-tovar.github.io/fundamentales/practicas/",
    becas: "https://alexander-tovar.github.io/fundamentales/becas/" },
  { nombre: "Edgar Leonardo Guzman Ibarra", matricula: "2148230",
    practicas: "https://leoguz12.github.io/PrograWeb-PracticasProfesionales/",
    becas: "https://leoguz12.github.io/BecasPrograWeb/" },
  { nombre: "Ian Karim Ávila González", matricula: "2117490",
    practicas: "https://jhonrick0923.github.io/actividad-fundamental-6/",
    becas: "https://jhonrick0923.github.io/actividad-fundamental-7/" },
  { nombre: "Diego Armando Valenciano Garcia", matricula: "2154143",
    practicas: "https://adiego0708-jpg.github.io/Acticidad-Fundamental-6/",
    becas: "https://adiego0708-jpg.github.io/Actividad-Fundamental-7/" },
  { nombre: "Lizzie Anette Mireles Tejada", matricula: "2144591",
    practicas: "https://lizz-mireles.github.io/2144591_AF6_PWEB/",
    becas: "https://lizz-mireles.github.io/2144591_AF7_PWEB/" },
  { nombre: "Christofer Aaron Torres Puga", matricula: "2159639",
    practicas: "https://chrispuga07.github.io/PrograWeb-PracticasProfesionales/",
    becas: "https://chrispuga07.github.io/PrograWeb-Becas/" },
  { nombre: "Diego Damián Camargo Ortiz", matricula: "2150020",
    practicas: "https://camargoortizdd-arch.github.io/programacion-web/af06/",
    becas: "https://camargoortizdd-arch.github.io/programacion-web/af07/" }
];
