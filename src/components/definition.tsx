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
      <div className="flex justify-between mt-5 mb-5" id="header">
        <div>
          <h1 className="font-bold text-[32px] text-[#2d2d2d] mb-2">
            {word.word}
          </h1>
          <h2 className=" text-[#A445ed]">{word.phonetic}</h2>
        </div>
        <img className="h-12 mt-auto mb-auto" src={playIcon}></img>
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
