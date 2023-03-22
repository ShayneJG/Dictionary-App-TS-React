import { WordApiResponse } from "../App";
import playIcon from "../assets/images/icon-play.svg";
import PartOfSpeech from "./partOfSpeech";
//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

interface DefinitionProps {
  word: WordApiResponse;
  fetchWord: Function;
}

const Definition: React.FC<DefinitionProps> = ({ word, fetchWord }) => {
  let audio: string;
  word.meanings.map((meaning) => {
    console.log(meaning);
  });
  word.phonetics.map((obj) => {
    if (obj.audio !== "") {
      audio = obj.audio;
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
      <div id="parts-of-speech">
        {word.meanings.map((meaning) => (
          <PartOfSpeech meaning={meaning} fetchWord={fetchWord} />
        ))}
      </div>
    </div>
  );
};

export default Definition;
