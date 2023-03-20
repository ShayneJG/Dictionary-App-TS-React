import { useState } from "react";
import "./App.css";
import Settings from "./components/settings";
import Search from "./components/search";
import Definition from "./components/definition";
const App = () => {
  //interfaces
  type Phonetics = {
    text: string;
    audio: string;
  };

  type Definition = {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  };

  type Meaning = {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
  };

  type WordApiResponse = {
    word: string;
    phonetics: Phonetics[];
    meanings: Meaning[];
    sourceUrls: string[];
    license: {
      name: string;
      url: string;
    };
  };
  //states

  const [font, setFont] = useState<string>("sans serif");
  const [night, setNight] = useState<boolean>(false);
  const [data, setData] = useState<WordApiResponse | null>();

  const fetchWord = async (searchTerm: string) => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    );
    const data = await response.json();
    setData(data[0]);
    console.log(data[0]);
  };

  return (
    <div id="app-container" className="w-1/2 m-auto">
      <Settings setFont={setFont} setNight={setNight} night={night} />
      <Search fetchWord={fetchWord} />
      <Definition data={data} />
    </div>
  );
};

export default App;
