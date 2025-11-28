const translations = {
  en: {
    // HEADER SECTION
    "nav.logo": "Matias",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.projects": "Projects",
    "nav.portfolio": "Portfolio",
    "nav.certifications": "Certifications",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // HERO SECTION
    "hero.greeting": "Hello, I'm",
    "hero.name": "Matias Hansen",
    "hero.title": "Software Engineering Student & Data Science Enthusiast",
    "hero.description": "Developing reliable software while exploring the power of data and analytics.",
    "hero.ctaContact": "Get in Touch",
    "hero.ctaWork": "View My Work",

    // ABOUT SECTION - EN
    "about.title": "About Me",
    "about.subtitle": "My Journey",
    "about.p1": "I am a dedicated Software Engineering student currently entering my final year (5th year) of my Information Systems Engineering degree. Throughout my academic journey, I have developed strong skills in software development, working on complex projects that integrate real-world requirements, modern architectures, and practical engineering practices.",
    "about.p2": "Over time, I have grown increasingly passionate about Data Science and Data Analytics. I am now actively expanding my knowledge in these areas, aiming to combine my software engineering background with analytical and data-driven approaches. My goal is to build solutions that not only work efficiently, but also provide meaningful insights and value through data.",
    "about.p3": "Beyond academics, I enjoy exploring new technologies, building structured system architectures, and solving real problems through code. I believe that the intersection of software engineering and data analysis is a space full of opportunities, and I am excited to continue growing and contributing in this field.",

    "about.detail.software.title": "Software Engineering",
    "about.detail.software.text": "Building efficient, reliable, and well-structured systems.",

    "about.detail.data.title": "Data Science",
    "about.detail.data.text": "Learning ML models, statistics, and data-driven processes.",

    "about.detail.fullstack.title": "Full Stack Development",
    "about.detail.fullstack.text": "End-to-end development from responsive user interfaces to robust APIs and microservices, using technologies like React, Node.js, Go.",

    "about.detail.analytics.title": "Analytics",
    "about.detail.analytics.text": "Turning data into insights through visualization and analysis.",
    
    // RESUME SECTION - EN
    "resume.title": "My Resume",
    "resume.subtitle": "My Professional Resume",
    "resume.tagline": "Tech Professional at the Intersection of Software Engineering & Data Science",
    "resume.preview": "Preview Resume",
    "resume.download": "Download PDF",

    // PROJECTS SECTION - EN
    "projects.title": "My Projects",
    "projects.filter.all": "All Projects",
    "projects.filter.sde": "Software Development",
    "projects.filter.dsml": "Data Science & ML",

    "projects.inv.title": "Inventory Management System",
    "projects.inv.desc": "FullStack inventory management platform developed for an academic project. Includes product, supplier, orders, and sales management. Built with a REST API backend (Express + Prisma + PostgreSQL) and a modern frontend using Next.js and TailwindCSS with interactive dashboards and visualizations.",

    "projects.sim.title": "Random Number Generator & Statistical Validation",
    "projects.sim.desc": "Academic project focused on developing and validating pseudo-random number generators in Python. Included statistical tests (Chi-square, KS, entropy), probabilistic distributions, and a Flask-based web interface for interactive visualization.",

    "projects.micro.title": "Microservices Auth, Event & Signup",
    "projects.micro.desc": "Distributed system built with Go and MongoDB featuring independent microservices for authentication, events and user signups. Demonstrates session invalidation through JWT introspection and centralized validation.",

    "projects.cypress.title": "Automated Testing with Cypress – Contact List",
    "projects.cypress.desc": "End-to-end automated testing suite covering registration, login, contact CRUD, validations, and protected route access. Built with Cypress for the Thinking Tester Contact List application.",

    "projects.pipeline.title": "Node.js CI Pipeline with GitHub Actions",
    "projects.pipeline.desc": "Minimal Node.js project showcasing a complete CI workflow with linting, formatting checks, unit tests, integration tests, and required checks using GitHub Actions.",
    
    // CERTIFICATIONS - EN
    "certs.title": "Certifications",

    "certs.analytics.title": "Data Analytics",
    "certs.analytics.issuer": "UTN.BA – CEIT",
    "certs.analytics.provider": "Centro de Estudiantes de Ingeniería Tecnológica",
    "certs.analytics.desc": "20-hour course covering SQL and Power BI for data analysis, dashboards, and business insights.",
    "certs.analytics.link": "View Certificate",

    "certs.fullstack.title": "De Cero a Full Stack",
    "certs.fullstack.issuer": "Udemy",
    "certs.fullstack.provider": "Instructor: Adrian Lisciotti",
    "certs.fullstack.desc": "107-hour full stack development program covering modern frontend and backend tools.",
    "certs.fullstack.link": "View Certificate",

    // EDUCATION - EN
    "edu.title": "Education",

    "edu.university.years": "2021 - Present",
    "edu.university.degree": "Bachelor's Degree in Information Systems Engineering",
    "edu.university.school": "Universidad Tecnológica Nacional (UTN) – Facultad Regional Mendoza",
    "edu.university.desc":"In progress – 5th year (estimated graduation: 2026). Focused on software engineering, databases, computer networks, operating systems, and data-driven systems, combining theory with hands-on projects and real-world applications.",
    "edu.university.h1": "Software Engineering",
    "edu.university.h2": "Databases",
    "edu.university.h3": "Computer Networks",
    "edu.university.h4": "Data Analytics",

    "edu.school.years": "2009 - 2021",
    "edu.school.degree": "High School Diploma – Bilingual Full-Day Program",
    "edu.school.school": "Colegio Los Olivos, Mendoza",
    "edu.school.desc":"Completed secondary education in a bilingual (Spanish–English) double-shift program, with strong emphasis on academic performance, communication skills, and teamwork.",
    "edu.school.h1": "Bilingual Education",
    "edu.school.h2": "Mathematics",
    "edu.school.h3": "English",
    "edu.school.h4": "Team Projects",

    // SKILLS - EN
    "skills.title": "My Skills",

    "skills.legend.used": "Used in Projects",
    "skills.legend.learning": "Learning",
    "skills.legend.familiar": "Familiar",

    "skills.cat.languages": "Languages & Core Tech",
    "skills.cat.frameworks": "Frameworks & Architecture",
    "skills.cat.ds": "Data Science & Analytics",
    "skills.cat.devops": "DevOps & Tools",

    // CONTACT - EN
    "contact.title": "Get In Touch",
    "contact.emailTitle": "Email",
    "contact.phoneTitle": "Phone",
    "contact.linkedinTitle": "LinkedIn",
    "contact.githubTitle": "GitHub",

    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",

    "contact.form.namePlaceholder": "Enter your name",
    "contact.form.emailPlaceholder": "Enter your email",
    "contact.form.subjectPlaceholder": "Enter the subject",
    "contact.form.messagePlaceholder": "Write your message",

    "contact.form.send": "Send Message",

    // FOOTER - EN
    "footer.rights": "All Rights Reserved.",
    "footer.scroll": "Scroll to top",

  },

  es: {
    // HEADER SECTION - ES
    "nav.logo": "Matias",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.resume": "Currículum",
    "nav.projects": "Proyectos",
    "nav.portfolio": "Portafolio",
    "nav.certifications": "Certificaciones",
    "nav.education": "Educación",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",

    // HERO SECTION - ES
    "hero.greeting": "Hola, soy",
    "hero.name": "Matias Hansen",
    "hero.title": "Estudiante de Ingeniería en Sistemas & Entusiasta de Data Science",
    "hero.description": "Desarrollando software confiable mientras exploro el poder de los datos y la analítica.",
    "hero.ctaContact": "Contactarme",
    "hero.ctaWork": "Ver mis proyectos",

    // ABOUT SECTION - ES
    "about.title": "Sobre mí",
    "about.subtitle": "Mi recorrido",
    "about.p1": "Soy un estudiante dedicado de Ingeniería en Sistemas, actualmente ingresando a mi último año (5º año) de la carrera de Ingeniería en Sistemas de Información. A lo largo de mi trayectoria académica, desarrollé sólidas habilidades en desarrollo de software, trabajando en proyectos complejos que integran requerimientos del mundo real, arquitecturas modernas y buenas prácticas de ingeniería.",
    "about.p2": "Con el tiempo, fui desarrollando un fuerte interés por el Data Science y el Data Analytics. Actualmente estoy ampliando activamente mis conocimientos en estas áreas, buscando combinar mi base de ingeniería de software con enfoques analíticos y orientados a datos. Mi objetivo es construir soluciones que no solo funcionen de forma eficiente, sino que también generen información valiosa y aporten valor a través de los datos.",
    "about.p3": "Más allá de lo académico, disfruto explorar nuevas tecnologías, diseñar arquitecturas de sistemas estructuradas y resolver problemas reales mediante código. Creo que la intersección entre la ingeniería de software y el análisis de datos es un espacio lleno de oportunidades, y me entusiasma seguir creciendo y aportando en este campo.",

    "about.detail.software.title": "Ingeniería de Software",
    "about.detail.software.text": "Construyendo sistemas eficientes, confiables y bien estructurados.",

    "about.detail.data.title": "Data Science",
    "about.detail.data.text": "Aprendiendo modelos de ML, estadística y procesos orientados a datos.",

    "about.detail.fullstack.title": "Desarrollo Full Stack",
    "about.detail.fullstack.text": "Desarrollo de punta a punta, desde interfaces de usuario responsivas hasta APIs robustas y microservicios, usando tecnologías como React, Node.js y Go.",

    "about.detail.analytics.title": "Analíticas",
    "about.detail.analytics.text": "Transformando datos en insights a través de visualización y análisis.",

    // RESUME SECTION - ES
    "resume.title": "Mi Currículum",
    "resume.subtitle": "Mi Currículum Profesional",
    "resume.tagline": "Profesional Tecnológico en la Intersección entre Ingeniería de Software y Ciencia de Datos",
    "resume.preview": "Ver Currículum",
    "resume.download": "Descargar PDF",

    // PROJECTS SECTION - ES
    "projects.title": "Mis Proyectos",
    "projects.filter.all": "Todos los Proyectos",
    "projects.filter.sde": "Desarrollo de Software",
    "projects.filter.dsml": "Data Science & ML",
    
    "projects.inv.title": "Sistema de Gestión de Inventario",
    "projects.inv.desc": "Plataforma FullStack desarrollada para un proyecto académico. Incluye gestión de productos, proveedores, órdenes y ventas. Backend REST API (Express + Prisma + PostgreSQL) y frontend moderno con Next.js y TailwindCSS.",
    
    "projects.sim.title": "Generador de Números Aleatorios y Validación Estadística",
    "projects.sim.desc": "Proyecto académico centrado en desarrollar y validar generadores pseudoaleatorios en Python. Incluye pruebas estadísticas (Chi-cuadrado, KS, entropía) y distribuciones probabilísticas, con una interfaz en Flask para visualización interactiva.",
    
    "projects.micro.title": "Microservicios Auth, Event & Signup",
    "projects.micro.desc": "Sistema distribuido desarrollado en Go y MongoDB con microservicios independientes para autenticación, eventos e inscripciones. Implementa invalidación de sesión mediante introspección JWT.",
    
    "projects.cypress.title": "Testing Automatizado con Cypress – Contact List",
    "projects.cypress.desc": "Suite de tests E2E que cubre registro, login, CRUD de contactos, validaciones y protección de rutas. Desarrollada con Cypress para la aplicación Thinking Tester Contact List.",
    
    "projects.pipeline.title": "Pipeline CI en Node.js con GitHub Actions",
    "projects.pipeline.desc": "Proyecto mínimo que demuestra un flujo de CI completo con linting, formateo, tests unitarios, test de integración y validación obligatoria mediante GitHub Actions.",

    // CERTIFICATIONS - ES
    "certs.title": "Certificaciones",

    "certs.analytics.title": "Data Analytics",
    "certs.analytics.issuer": "UTN.BA – CEIT",
    "certs.analytics.provider": "Centro de Estudiantes de Ingeniería Tecnológica",
    "certs.analytics.desc": "Curso de 20 horas sobre SQL y Power BI para análisis de datos, creación de tableros e insights de negocio.",
    "certs.analytics.link": "Ver certificado",

    "certs.fullstack.title": "De Cero a Full Stack",
    "certs.fullstack.issuer": "Udemy",
    "certs.fullstack.provider": "Instructor: Adrian Lisciotti",
    "certs.fullstack.desc": "Programa de desarrollo Full Stack de 107 horas que cubre herramientas modernas de frontend y backend.",
    "certs.fullstack.link": "Ver certificado",

    // EDUCATION - ES
    "edu.title": "Educación",

    "edu.university.years": "2021 - Actualidad",
    "edu.university.degree": "Ingeniería en Sistemas de Información (Grado Universitario)",
    "edu.university.school": "Universidad Tecnológica Nacional (UTN) – Facultad Regional Mendoza",
    "edu.university.desc":"En curso – 5° año (graduación estimada: 2026). Enfocado en ingeniería de software, bases de datos, redes de computadoras, sistemas operativos y sistemas basados en datos, combinando teoría con proyectos prácticos y aplicaciones reales.",
    "edu.university.h1": "Ingeniería de Software",
    "edu.university.h2": "Bases de Datos",
    "edu.university.h3": "Redes de Computadoras",
    "edu.university.h4": "Analítica de Datos",

    "edu.school.years": "2009 - 2021",
    "edu.school.degree": "Título Secundario – Programa Bilingüe de Jornada Completa",
    "edu.school.school": "Colegio Los Olivos, Mendoza",
    "edu.school.desc":"Educación secundaria completada en un programa bilingüe (Español–Inglés) de doble turno, con un fuerte enfoque en el rendimiento académico, habilidades comunicativas y trabajo en equipo.",
    "edu.school.h1": "Educación Bilingüe",
    "edu.school.h2": "Matemática",
    "edu.school.h3": "Inglés",
    "edu.school.h4": "Trabajo en Equipo",

    // SKILLS - ES
    "skills.title": "Mis Habilidades",

    "skills.legend.used": "Usado en Proyectos",
    "skills.legend.learning": "En Aprendizaje",
    "skills.legend.familiar": "Familiar",

    "skills.cat.languages": "Lenguajes y Tecnologías Base",
    "skills.cat.frameworks": "Frameworks y Arquitectura",
    "skills.cat.ds": "Data Science y Analítica",
    "skills.cat.devops": "DevOps y Herramientas",

    // CONTACT - ES
    "contact.title": "Contacto",
    "contact.emailTitle": "Correo",
    "contact.phoneTitle": "Teléfono",
    "contact.linkedinTitle": "LinkedIn",
    "contact.githubTitle": "GitHub",

    "contact.form.name": "Nombre",
    "contact.form.email": "Correo",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",

    "contact.form.namePlaceholder": "Ingresa tu nombre",
    "contact.form.emailPlaceholder": "Ingresa tu correo",
    "contact.form.subjectPlaceholder": "Ingresa el asunto",
    "contact.form.messagePlaceholder": "Escribe tu mensaje",

    "contact.form.send": "Enviar Mensaje",

    // FOOTER - ES
    "footer.rights": "Todos los derechos reservados.",
    "footer.scroll": "Volver arriba",

  }
};
