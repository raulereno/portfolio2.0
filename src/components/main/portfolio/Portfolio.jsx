import React from "react";
import Proyectos from "./proyectos/Proyectos";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <section id="container_portfolio">
      <h2 className="portfolio_title">Portfolio</h2>
      <p className="portfolio_text">
        Proyectos que realice y cuales tecnologías implemente en cada uno de
        estos proyectos.
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
