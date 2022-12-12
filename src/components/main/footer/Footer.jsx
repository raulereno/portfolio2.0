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

      <div className="arrowUp">
        <a  href="#container_landing">
          <svg
            width={"30"}
            height={"30"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
