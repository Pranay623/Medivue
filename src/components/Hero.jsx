import Navbar from "./Navbar.jsx";
import Land from "./Land.jsx";
import Program from "./Program.jsx";
import Country from "./Country.jsx";
import Process from "./Process.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        <div id="home">
          <Land />
        </div>
        <div id="program">
          <Program />
        </div>
        <div id="country">
          <Country />
        </div>
        <div id="process">
          <Process />
        </div>
        <div id="form">
          <Form />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Hero;
