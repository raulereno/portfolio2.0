import React, { useState } from "react";
import SocialMedias from "../socialMedias/SocialMedias";
import { UseTypedHooks } from "./useTypingHook";

const Landing = () => {
  const [reset, setReset] = useState(false);

  setTimeout(() => {
    setReset(!reset);
  }, 13000);

  return (
    <section id="container_landing">
      <div id="textLanding">
        <h1>Ereño Raul</h1>
        <p className="container_typing">
          Soy
          <UseTypedHooks reset={reset} />
        </p>
        <SocialMedias />
      </div>
      <div id="imgLanding">
        <img src="./assets/prueba2.jpg" alt="" srcSet="" />
      </div>
    </section>
  );
};

export default Landing;
