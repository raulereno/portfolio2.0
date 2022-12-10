import React, { useState } from "react";
import Proyectos from "./proyectos/Proyectos";
import { projects } from "./projects";
import FsLightbox from "fslightbox-react";
import DetailProyects from "./proyectosDetail/DetailProyects";
import GLightbox from "glightbox";

const Portfolio = () => {
  return (
    <section id="container_portfolio">
      <h2 className="portfolio_title">Portfolio</h2>
      <p className="portfolio_text">
        Un pequeño resumen de los proyectos que realice y cuales tecnologias
        implemente
      </p>
      <div className="container_projects">
        {projects.map((e, i) => {
          return <Proyectos key={e.id} proyect={e} />;
        })}
      </div>
    </section>
  );
};

/*
 <div style={{ width: "200px", height: "100px" }}>
            <DetailProyects>A wrapped component.</DetailProyects>
          </div>,
*/
export default Portfolio;
