import React from "react";

const About = () => {
  return (
    <section id="container_about">
      <h2>Sobre Mí</h2>

      <div className="info_about">
        <img src="./assets/FOTO-CV.jpeg" alt="" />
        <div>
          <p>
            Una pandemia mundial que nos cambió la vida, y yo no fui la
            excepción, cambié los libros de leyes, Códigos y Constitución por
            una computadora y Google. Y así empezó mi viaje en este hermoso
            mundo del que me atrevo a decir que conozco solo el 1% y que mi
            forma de ser me empuja a conocer cada día un poco más.
          </p>

          <p>
            En la actualidad me encuentro realizando proyectos en los que
            implemento tecnologías como HMTL, CSS y JavaScript, también utilice
            librerías como React, Bootstrap y Redux. Mi mayor orgullo fue
            aprender Angular con Typescript en el proyecto final del bootcamp
            soyHenry ya que había fechas de entregas que cumplir y un nuevo
            framework que aprender, también conozco la implementación de NodeJS,
            Express, Sequelize y PostgreSQL ya que en algunos de los proyectos
            mencionados he necesitado un backend que me provea de información.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
