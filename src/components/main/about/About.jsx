import React from "react";

const About = () => {
  return (
    <section id="container_about">
      <h2>Sobre Mí</h2>

      <div className="info_about">
        <img src="./assets/FOTO-CV.jpeg" alt="" />
        <div>
          <p>
            Buenass! soy Raul Ereño, un programador Full Stack especializado en
            el stack PERN, pero en el constante aprendizaje de otras
            tecnologías. Estos conocimientos los obtuve del Bootcamp de
            SoyHenry, después de muchas horas de estudio.
          </p>

          <p>
            Después de años de estudiar la misma carrera, en dos universidades
            distintas me di cuenta de ese campo no era para mí, que no me
            gustaban las leyes. Por eso al investigar y con el boom de esta
            profesión debido a la pandemia decidí de a poco ir estudiando esto,
            y realmente me gusto porque es un desafío constante para superarse a
            uno mismo con las cosas que hace y aprende.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
