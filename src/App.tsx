import { useState } from "react";
import "./App.css";

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

  return <div></div>;
};

export default App;
