import { useState } from "react";
import "./App.css";
import Settings from "./components/settings";

const App = () => {
  //interfaces

  //states

  const [font, setFont] = useState<string>("sans serif");
  const [night, setNight] = useState<boolean>(false);

  return (
    <div>
      <Settings setFont={setFont} setNight={setNight} />
    </div>
  );
};

export default App;
