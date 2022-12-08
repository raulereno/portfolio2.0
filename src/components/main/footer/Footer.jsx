import React from "react";
import SocialMedias from "../socialMedias/SocialMedias";

const Footer = () => {
  return (
    <div className="container_footer">
      <h2>Ereño Raúl</h2>
      <div className="quote">
        <p>
          “Lo único que puedo decirles a ustedes es que si me hacen una pregunta
          y no sé la respuesta, les diré directamente que no sé la respuesta,
          pero también buscaré la forma de encontrarla, y cuando la tenga, se la
          daré.”
        </p>
        <p className="film">Will Smith. En busca de la felicidad (2006)</p>
      </div>
      <SocialMedias />
    </div>
  );
};

export default Footer;
