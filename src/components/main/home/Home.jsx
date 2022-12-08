import React, { useState } from "react";
import SocialMedias from "../socialMedias/SocialMedias";
import { UseTypedHooks } from "./useTypingHook";

const Home = () => {
  const [reset, setReset] = useState(false);

  setTimeout(() => {
    setReset(!reset);
  }, 13000);

  return (
    <section id="container_home">
      <h1>Ereño Raul</h1>
      <p className="container_typing">
        Soy
        <UseTypedHooks reset={reset} />
      </p>
      <SocialMedias />
    </section>
  );
};

export default Home;
