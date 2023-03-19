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

  function getWord() {
    getDefinition().then((result) => setData(result));
    console.log(data);
  }

  function getDefinition(): Promise<object> {
    return new Promise((resolve, reject) => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((json) => {
          console.log(json);
          resolve(json);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  }

  return (
    <div id="app-container" className="w-1/2 m-auto">
      <Settings setFont={setFont} setNight={setNight} night={night} />
      <Search search={search} setSearch={setSearch} getWord={getWord} />
      <Definition data={data} />
    </div>
  );
};

export default App;
