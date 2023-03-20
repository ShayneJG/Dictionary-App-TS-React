import { WordApiResponse } from "../App";
import playIcon from "../assets/images/icon-play.svg";
//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

interface DefinitionProps {
  word: WordApiResponse;
}

const Definition: React.FC<DefinitionProps> = ({ word }) => {
  let audio: string;

  word.phonetics.map((str) => {
    if (str.audio !== "") {
      audio = str.audio;
    }
  });

  return (
    <div>
      <div id="header">
        <div id="word">
          <h1>{word.word}</h1>
          <h2>{word.phonetic}</h2>
        </div>
        <img src={playIcon}></img>
      </div>
      <div id="parts-of-speech"></div>
    </div>
  );
};

export default Definition;
