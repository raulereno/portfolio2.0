import React from "react";

const Resume = () => {
  return (
    <section id="container_resume">
      <h2>
        <b>Resumen</b>
      </h2>
      <p>
        Un pequeño resumen de las experiencias que tuve y la educación obtenida
      </p>
      <div className="resume">
        <div className="education">
          <h3>
            <b>Educacion</b>
          </h3>
          <ul>
            <li>
              <h4>
                <b>Full Stack Developer</b>
              </h4>
              <p>
                Bootcamp de soyHenry donde aprendí a desarrollar paginas web con
                el stack PERN
              </p>
              <a
                href="https://certificates.soyhenry.com/cert?id=236bee14-f685-4331-b118-5b0609495d0e"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Certificado
              </a>
            </li>
            <li>
              <h4>
                <b>Front-End React</b>
              </h4>
              <p>
                Titulo obtenido en la institución durante el curso de Full Stack
                de Coder House, esta compuesto por tres cursos: Desarrollo web,
                Javascript y React
              </p>
              <a
                href="https://postimg.cc/NKJdDpVV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Certificado
              </a>

              <h4>
                <b>Full Stack Developer</b>
              </h4>
              <p>...En curso en CoderHouse, stack MERN</p>
            </li>
            <li>
              <h4>
                <b>Curso de Fundamentos de la programación</b>
              </h4>
              <p>
                Obtenido en la Universidad Tecnologica Nacional Facultad
                Regional Buenos Aires
              </p>
              <a
                href="https://postimg.cc/xqBJvHtR"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Certificado
              </a>
            </li>
          </ul>
        </div>
        <div className="work_experience">
          <h3>
            <b>Experiencia Laboral:</b>
          </h3>
          <ul>
            <li>
              <div className="circle_list"></div>
              <h4>
                <b>Teaching Assistent</b>
              </h4>
              <p>
                Ayudante de bootcamp (TA) para alumnos de Desarrollo Full-Stack.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
