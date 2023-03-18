import { useState } from "react";
import "./App.css";
import Settings from "./components/settings";

const App = () => {
  //interfaces

  //states

  const [font, setFont] = useState<string>("sans serif");
  const [night, setNight] = useState<boolean>(false);

  return (
    <div id="app-container" className="w-1/2 m-auto">
      <Settings setFont={setFont} setNight={setNight} night={night} />
    </div>
  );
};

export default App;
