import { useState } from "react";
import "./App.css";
import Settings from "./components/settings";
import Search from "./components/search";
import Definition from "./components/definition";

export type Phonetics = {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
};

export type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
  license?: {
    name: string;
    url: string;
  };
};

export type Meanings = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
  license?: {
    name: string;
    url: string;
  };
};

export type WordApiResponse = {
  word: string;
  phonetic?: string;
  phonetics: Phonetics[];
  meanings: Meanings[];
  sourceUrls: string[];
  license?: {
    name: string;
    url: string;
  };
};

const App = () => {
  const firstWord: WordApiResponse = {
    word: "origin",
    phonetic: "/ˈɒɹ.ə.dʒən/",
    phonetics: [
      { text: "/ˈɒɹ.ə.dʒən/", audio: "" },
      {
        text: "/ˈɑɹ.ɪ.dʒɪn/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/origin-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1676813",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: "The beginning of something.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "The source of a river, information, goods, etc.",
            synonyms: ["source"],
            antonyms: [],
          },
          {
            definition:
              "The point at which the axes of a coordinate system intersect.",
            synonyms: ["zero vector"],
            antonyms: [],
          },
          {
            definition:
              "The proximal end of attachment of a muscle to a bone that will not be moved by the action of that muscle.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "An arbitrary point on Earth's surface, chosen as the zero for a system of coordinates.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "(in the plural) Ancestry.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: ["source", "zero vector"],
        antonyms: ["insertion", "end", "destination"],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/origin"],
  };

  const [font, setFont] = useState<string>("sans serif");
  const [night, setNight] = useState<boolean>(false);
  const [data, setData] = useState<WordApiResponse>(firstWord);

  const fetchWord = async (searchTerm: string) => {
    if (searchTerm === "") return;
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    );
    if (response.status === 404) {
      throw new Error(`Word not found: ${searchTerm}`);
    }
    const data = await response.json();
    setData(data[0]);
    console.log(data[0]);
  };

  return (
    <div id="app-container" className="w-1/2 m-auto">
      <Settings setFont={setFont} setNight={setNight} night={night} />
      <Search fetchWord={fetchWord} />
      <Definition word={data} fetchWord={fetchWord} />
      <div className="border border-solid"></div>
      <div>
        <p>Source</p>{" "}
        <a target="_blank" href={data.sourceUrls[0]}>
          {data.sourceUrls[0]}
        </a>
      </div>
    </div>
  );
};

export default App;
