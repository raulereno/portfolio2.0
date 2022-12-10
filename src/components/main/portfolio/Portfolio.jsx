import React, { useState } from "react";
import Proyectos from "./proyectos/Proyectos";
import { projects } from "./projects";
import FsLightbox from "fslightbox-react";
import DetailProyects from "./proyectosDetail/DetailProyects";

const Portfolio = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <section id="container_portfolio">
      <h2 className="portfolio_title">Portfolio</h2>
      <p className="portfolio_text">
        Un pequeño resumen de los proyectos que realice y cuales tecnologias
        implemente
      </p>
      <div className="container_projects">
        {projects.map((e, i) => {
          return (
            <Proyectos toggler={openLightboxOnSlide} key={e.id} proyect={e} />
          );
        })}
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={projects
          .filter((e) => e.name !== "En progreso")
          .map((e, i) => {
            return (
              <div className="container_detail">
                <DetailProyects key={i} proyect={e} />
              </div>
            );
          })}
        slide={lightboxController.slide}
      />
    </section>
  );
};

/*
 <div style={{ width: "200px", height: "100px" }}>
            <DetailProyects>A wrapped component.</DetailProyects>
          </div>,
*/
export default Portfolio;
