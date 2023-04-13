import React, { useState } from "react";
import Navbar from "./Navbar";
import useMediaQuery from "../hooks/useMediaQuery";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumSrceens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
