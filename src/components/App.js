import React, { useState } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import DotGroup from "./DotGroup";
import LineGradient from "./LineGradient";
import MySkills from "./MySkills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import useMediaQuery from "../hooks/useMediaQuery";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumSrceens = useMediaQuery("(min-width: 1060px)");

  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumSrceens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
