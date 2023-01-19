import Landing from "./Landing/Landing";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./portfolio/Portfolio";
import Resume from "./resume/Resume";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { useState } from "react";
import ParticlesBackground from "./ParticlesBackground/ParticlesBackground";
import lenguages from "../../const/lenguage";

const Main = () => {
  const [showNav, setShowNav] = useState(false);
  const [lenguage, setLenguage] = useState(
    localStorage.getItem("lenguage") || "es"
  );

  const activateNav = () => {
    setShowNav(!showNav);
  };

  const changeLenguage = () => {
    let newLenguage = lenguage === "es" ? "en" : "es";
    setLenguage(newLenguage);
    localStorage.setItem("lenguage", newLenguage);
  };

  return (
    <div className="container_main">
      {showNav ? (
        <button className="responsive_nav closeNav" onClick={activateNav}>
          <svg
            width={"30"}
            height={"30"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </button>
      ) : (
        <button className="responsive_nav" onClick={activateNav}>
          <svg
            width={"30"}
            height={"30"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      )}
      <ParticlesBackground />
      <Navbar
        showNav={showNav}
        setShowNav={setShowNav}
        leng_nav={lenguages[`${lenguage}`].nav}
      />
      <div id="container_components">
        <Landing
          changeLenguage={changeLenguage}
          lenguage={lenguage}
          leng_landing={lenguages[`${lenguage}`].landing}
          leng_social={lenguages[`${lenguage}`].links}
        />
        <Portfolio
          lenguage={lenguage}
          leng_portfolio={lenguages[`${lenguage}`].portfolio}
        />
        <Resume leng_resume={lenguages[`${lenguage}`].resume} />
        <About leng_about={lenguages[`${lenguage}`].about} />
        <Contact leng_contact={lenguages[`${lenguage}`].contact} />
        <Footer
          leng_footer={lenguages[`${lenguage}`].footer}
          leng_social={lenguages[`${lenguage}`].links}
        />
      </div>
      <a className="arrowUp" href="#container_landing">
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
  );
};

export default Main;
