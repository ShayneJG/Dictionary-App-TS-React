import { useState } from "react";
import "./App.css";
import Settings from "./components/settings";
import Search from "./components/search";
import Definition from "./components/definition";
const App = () => {
  //interfaces

  //states
  const [search, setSearch] = useState<string>("");
  const [font, setFont] = useState<string>("sans serif");
  const [night, setNight] = useState<boolean>(false);
  const [data, setData] = useState<object>({});

  return (
    <div id="app-container" className="w-1/2 m-auto">
      <Settings setFont={setFont} setNight={setNight} night={night} />
      <Search search={search} setSearch={setSearch} />
      <Definition data={data} />
    </div>
  );
};

export default App;
