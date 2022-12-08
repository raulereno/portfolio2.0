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
              <div className="circle_list"></div>
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
            </li>
            <li>
              <div className="circle_list"></div>
              <h4>
                <b>Full Stack Developer</b>
              </h4>
              <p>
                <strong>...En curso en SoyHenry, stack PERN</strong>
              </p>
            </li>
            <li>
              <div className="circle_list"></div>
              <h4>
                <b>Full Stack Developer</b>
              </h4>
              <p>
                <strong>...En curso en CoderHouse, stack MERN</strong>
              </p>
            </li>
            <li>
              <div className="circle_list"></div>
              <h4>
                <b>Curso de Fundamentos de la programacion</b>
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
