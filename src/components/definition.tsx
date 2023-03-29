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
            <h1 className="font-bold text-[32px] md:text-[64px] text-[#2d2d2d] dark:text-white mb-2">
              {word.word}
            </h1>
            <h2 className=" text-[#A445ed] -mt-2 md:-mt-4 md:text-2xl">
              {word.phonetic}
            </h2>
          </div>
          <PlayIcon handleImageClick={handleImageClick} />
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
interface PlayIconProps {
  handleImageClick: React.MouseEventHandler<SVGSVGElement>;
}
const PlayIcon: React.FC<PlayIconProps> = ({ handleImageClick }) => {
  return (
    <svg
      onClick={handleImageClick}
      className="w-12 h-12 md:h-[75px] md:w-[75px]  my-auto hover:text-white play-button-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
    >
      <g fill="#A445ED" fillRule="evenodd">
        <circle
          id="circle-element"
          cx="37.5"
          cy="37.5"
          r="37.5"
          opacity=".25"
          className="circle fill-current text-[#A445ED] hover:cursor-pointer hover:opacity-100"
        />
        <path
          id="path-element"
          d="M29 27v21l21-10.5"
          fill="#A445ED"
          className="triangle "
        />
      </g>
    </svg>
  );
};

export default Definition;
