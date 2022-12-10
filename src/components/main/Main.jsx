import Landing from "./Landing/Landing";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./portfolio/Portfolio";
import Resume from "./resume/Resume";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const Main = () => {
  return (
    <div className="container_main">
      <Navbar />
      <div>
        <Landing />
        <Portfolio />
        <Resume />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
