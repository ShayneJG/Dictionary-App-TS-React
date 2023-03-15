import { useState } from "react";
import "./App.css";
import Settings from "./components/settings";

const App = () => {
  //interfaces
  interface settings {
    font: string;
    night: boolean;
  }

  //states

  const [setting, setSetting] = useState<settings>({
    font: "Sans Serif",
    night: false,
  });

  return (
    <div>
      <Settings setSettings={setSettings} />
    </div>
  );
};

export default App;
