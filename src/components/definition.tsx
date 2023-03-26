import { WordApiResponse } from "../App";
import playIcon from "../assets/images/icon-play.svg";
import PartOfSpeech from "./partOfSpeech";
import { useRef } from "react";
//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

interface DefinitionProps {
  word: WordApiResponse | null;
  fetchWord: Function;
  font: string;
}

const Definition: React.FC<DefinitionProps> = ({ word, fetchWord, font }) => {
  let audio: string = "";

  if (word !== null) {
    word.phonetics.map((obj) => {
      if (obj.audio !== "") {
        audio = obj.audio;
      }
    });
  }
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleImageClick = () => {
    if (audioRef.current) {
      audioRef.current.src = `${audio}?t=${new Date().getTime()}`;

      audioRef.current.play();
    }
  };

  if (word === null) {
    return (
      <div className="mt-10 flex flex-col justify-center items-center  ">
        <h1 className="text-6xl m-10 ">😕</h1>
        <h2 className="font-bold text-xl m-5 ">No Definitions Found</h2>
        <p className="text-md text-[#757575] ">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at a later time or head to the web
          instead.
        </p>
      </div>
    );
  } else
    return (
      <div>
        <div className="flex justify-between mt-5 mb-5" id="header">
          <div>
            <h1 className="font-bold text-[32px] text-[#2d2d2d] dark:text-white mb-2">
              {word.word}
            </h1>
            <h2 className=" text-[#A445ed]">{word.phonetic}</h2>
          </div>
          <img
            className="h-12 mt-auto mb-auto"
            src={playIcon}
            onClick={handleImageClick}
          ></img>
          <audio ref={audioRef}>
            <source src={audio} type="audio/mp3" />
          </audio>
        </div>
        <div id="parts-of-speech">
          {word.meanings.map((meaning, index) => (
            <PartOfSpeech
              meaning={meaning}
              fetchWord={fetchWord}
              font={font}
              key={index}
            />
          ))}
        </div>
      </div>
    );
};

export default Definition;
