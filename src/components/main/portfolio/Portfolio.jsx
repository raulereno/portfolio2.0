import React from "react";
import Proyectos from "./proyectos/Proyectos";
import { projects } from "../../../const/projects";

const Portfolio = ({ leng_portfolio, lenguage }) => {
  return (
    <section id="container_portfolio">
      <h2 className="portfolio_title">{leng_portfolio.title}</h2>
      <p className="portfolio_text">{leng_portfolio.description}</p>
      <div className="container_projects">
        {projects[lenguage].map((e, i) => {
          return <Proyectos key={e.id} proyect={e} lenguage={lenguage} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
