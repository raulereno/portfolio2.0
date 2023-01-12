import React from "react";
import Typed from "typed.js";

export const UseTypedHooks = ({ reset }) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Full Stack Developer"],
      typeSpeed: 150,
      backSpeed: 150,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [reset]);
  return <span className="typing" style={{ whiteSpace: "pre" }} ref={el} />;
};
