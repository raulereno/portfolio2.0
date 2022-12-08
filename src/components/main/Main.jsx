import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Resume from "./resume/Resume";

const Main = () => {
  return (
    <div className="container_main">
      <Home />
      <Portfolio />
      <Resume />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
