import React from "react";

const About = ({ leng_about }) => {
  return (
    <section id="container_about">
      <h2>{leng_about.title}</h2>

      <div className="info_about">
        <img src="./assets/FOTO-CV.jpeg" alt="" />
        <div>
          <p>{leng_about.text}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
