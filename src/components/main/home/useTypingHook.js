import React from "react";
import Typed from "typed.js";

export const UseTypedHooks = ({ reset }) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [reset]);
  return (
    <div className="type-wrap">
      <span style={{ whiteSpace: "pre" }} ref={el} />
    </div>
  );
};
