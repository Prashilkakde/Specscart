import React from "react";
import Awards from "./components/Awards";
import "./App.css"
import { Navabar } from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navabar/>
        <Awards/>
    </div>
  );
};

export default App;
