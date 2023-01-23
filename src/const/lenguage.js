const lenguages = {
  es: {
    nav: {
      home: "Inicio",
      portfolio: "Portfolio",
      resume: "Resumen",
      about: "Sobre mi",
      contact: "Contacto",
    },
    landing: {
      title: "Soy",
      downloadCv: "Descargar CV",
    },
    portfolio: {
      title: "Portfolio",
      description:
        "Proyectos que realice y cuales tecnologías implemente en cada uno de los proyectos.",
    },
    resume: {
      title: "Resumen",
      description:
        "Un pequeño resumen de las experiencias que tuve y la educación obtenida",
      education: {
        title: "Educación",
        link_text: "Ver certificado",
        henry: {
          title: "Full Stack Developer",
          description:
            " Bootcamp de soyHenry donde aprendí a desarrollar paginas web con el stack PERN",
          certificate:
            "https://certificates.soyhenry.com/cert?id=236bee14-f685-4331-b118-5b0609495d0e",
        },
        coderHouse: {
          frontend: {
            title: "Front-End React",
            description:
              "Titulo obtenido en la institución durante el curso de Full Stack de Coder House, esta compuesto por tres cursos: Desarrollo web,Javascript y React",
            certificate: "https://postimg.cc/NKJdDpVV",
          },
          fullstack: {
            title: "Full Stack Developer",
            description: "...En curso en CoderHouse, stack MERN",
          },
        },
        utnfr: {
          title: "Curso de Fundamentos de la programación",
          description:
            "Obtenido en la Universidad Tecnologica Nacional Facultad Regional Buenos Aires",
          certificate:
            "https://drive.google.com/file/d/1srwet20QGbYw4jWCdAgjQt-iW2qDB8Dh/view?usp=sharing",
        },
      },
      employmentHistory: {
        title: "Expenciencia Laboral",
        henry: {
          title: "Full Stack Teaching Assistant",
          description:
            "Ayudante de bootcamp (TA) para alumnos de Desarrollo Full-Stack.",
        },
      },
    },
    about: {
      title: "Sobre mí",
      text: "En la actualidad me encuentro realizando proyectos en los que implemento tecnologías como HTML, CSS y JavaScript, también utilice librerías como React, Bootstrap y Redux. Mi mayor orgullo fue aprender Angular con Typescript en el proyecto final del bootcamp soyHenry ya que había fechas de entregas que cumplir y un nuevo framework que aprender, también conozco la implementación de NodeJS, Express, Sequelize y PostgreSQL ya que en algunos de los proyectos mencionados he necesitado un backend que me provea de información.Para sumar valor y conocimientos estoy aprendiendo Django con Python en el curso de la Universidad de Harvard, CS50's Web Programming with Python and JavaScript.",
    },
    contact: {
      title: "Contacto",

      location: "Locación",
      form: {
        name: "Tu nombre",
        email: "Tu email",
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar mensaje",
      },
      alert: {
        text: "Su email ha sido enviado, en la brevedad le estare contestando.",
      },
      validationText: {
        write: {
          field_username: "Su nombre no puede contener numeros",
          field_email: "Porfavor ingrese un mail valido",
        },
        send: {
          field_username: "Ingrese su nombre porfavor",
          field_email: "Ingresa un mail porfavor",
          field_message: "Porfavor dejame un mensaje",
          recaptcha: "Porfavor complete el recaptcha",
        },
      },
    },
    footer: {
      quote:
        "“Lo único que puedo decirles a ustedes es que si me hacen una pregunta y no sé la respuesta, les diré directamente que no sé la respuesta, pero también buscaré la forma de encontrarla, y cuando la tenga, se la daré.”",
      author: "Will Smith. En busca de la felicidad (2006)",
    },
    links: {
      linkedin: "https://www.linkedin.com/in/raulereno/",
      cv: "https://drive.google.com/file/d/17E-mw3L4-S1pnN7gmb0m8-BC8jTekSDX/view?usp=sharing",
    },
  },
  en: {
    nav: {
      home: "Home",
      portfolio: "Projects",
      resume: "Resume",
      about: "About",
      contact: "Contact",
    },
    landing: {
      title: "Im",
      downloadCv: "Download CV",
    },
    portfolio: {
      title: "Projects",
      description:
        "Projects I have completed and the technologies implemented in each project.",
    },
    resume: {
      title: "Summary",
      description:
        "A brief summary of my experiences and the education I've obtained.",
      education: {
        title: "Education",
        link_text: "View certificate",
        henry: {
          title: "Full Stack Developer",
          description:
            "Bootcamp at soyHenry where I learned to develop web pages with the PERN stack.",
          certificate:
            "https://certificates.soyhenry.com/cert?id=236bee14-f685-4331-b118-5b0609495d0e",
        },
        coderHouse: {
          frontend: {
            title: "Front-End React",
            description:
              "Title obtained from the institution during the Full Stack course at Coder House, consisting of three courses: Web Development, Javascript, and React.",
            certificate: "https://postimg.cc/NKJdDpVV",
          },
          fullstack: {
            title: "Full Stack Developer",
            description: "In progress at CoderHouse, MERN stack.",
          },
        },
        utnfr: {
          title: "Curso de Fundamentos de la programación",
          description:
            "Obtained from National Technological University, Buenos Aires Regional Faculty.",
          certificate:
            "https://drive.google.com/file/d/1srwet20QGbYw4jWCdAgjQt-iW2qDB8Dh/view?usp=sharing",
        },
      },
      employmentHistory: {
        title: "Employment History",
        henry: {
          title: "Full Stack Teaching Assistant",
          description:
            "Bootcamp TA (Teaching Assistant) for Full-Stack Development students.",
        },
      },
    },
    about: {
      title: "About me",

      text: "Currently, I am working on projects that implement technologies such as HTML, CSS, and JavaScript. I also use libraries such as React, Bootstrap and Redux. My greatest achievement was learning Angular with TypeScript in the final project of the soyHenry bootcamp because there were deadlines to meet and a new framework to learn. I also have experience implementing NodeJS, Express, Sequelize, and PostgreSQL as I have needed a backend that provides me with information in some of the projects mentioned. To add value and knowledge, I am currently learning Django with Python in the Harvard University course, CS50's Web Programming with Python and JavaScript.",
    },
    contact: {
      title: "Contact",
      location: "Location",
      form: {
        name: "Your name",
        email: "Your email",
        subject: "Subject",
        message: "Message",
        submit: "Send message",
      },
      alert: {
        text: "Your email has been sent, I will be responding to you shortly.",
      },
      validationText: {
        write: {
          field_username: "Your name cannot contain numbers.",
          field_email: "Please enter a valid email.",
        },
        send: {
          field_username: "Please enter your name.",
          field_email: "Please enter an email.",
          field_message: "Please leave me a message.",
          recaptcha: "Please complete the reCAPTCHA.",
        },
      },
    },
    footer: {
      quote:
        "“I'm the type of person that if you ask me a question and i don't konw the answer, i'm gonna tell you that i don't konw. But i bet you what, i know how to find the answer and i will find the answer. ”",
      author: "Will Smith. Pursuit of Happiness (2006)",
    },
    links: {
      linkedin: "https://www.linkedin.com/in/raulereno/?locale=en_US",
      cv: "https://drive.google.com/file/d/1VttVAHb1QBBOnZKQDFfnxnE2kpO55JY9/view?usp=sharing",
    },
  },
};

export default lenguages;
