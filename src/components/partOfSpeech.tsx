import { Meanings, Definition } from "../App";

// Meanings = {
//   partOfSpeech: string;
//   definitions: Definition[];
//   synonyms: string[];
//   antonyms: string[];
//   license?: {
//     name: string;
//     url: string;
//   };
// };

type PartOfSpeechProps = {
  meaning: Meanings;
  fetchWord: Function;
  font: string;
};

const PartOfSpeech: React.FC<PartOfSpeechProps> = ({
  meaning,
  fetchWord,
  font,
}) => {
  return (
    <div className="my-10">
      <div className="flex mt-5 mb-5">
        <h1
          className={`font-bold   ${
            font === "font-mono" ? "" : "italic"
          } text-lg md:text-2xl leading-5 ${
            font === "font-serif" ? "font-loraItalic" : ""
          } `}
        >
          {meaning.partOfSpeech}
        </h1>
        <div className=" border border-solid w-full m-auto ml-4 border-[#e9e9e9]/50"></div>
      </div>
      <div>
        <h2 className="text-base md:text-xl mt-5 mb-3	text-[#757575]">
          Meaning
        </h2>
        <ul className="ml-4 list-disc marker:text-[#8f19e8] marker:text-sm ">
          {meaning.definitions.map((arr, index) => {
            return (
              <li
                className="mb-3 text-[15px] md:text-lg  pl-2 text-[#2d2d2d] dark:text-white	md:ml-5	leading-6	"
                key={index}
              >
                {arr.definition}
                {arr.example && (
                  <p key={index} className="pt-3 pb-3 text-[#757575]">
                    {'"' + arr.example + '"'}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {meaning.synonyms[0] && (
        <div className="flex mt-6 mb-6">
          <h2 className="text-[#757575] md:text-xl text-base">Synonyms</h2>
          <span className="ml-5 text-base md:text-xl text-[#A445ed] font-bold">
            {meaning.synonyms.map((word, index) => {
              if (index === 0) {
                return (
                  <a
                    className="hover:cursor-pointer hover:underline"
                    key={index}
                    onClick={() => {
                      fetchWord(word);
                    }}
                  >
                    {word}
                  </a>
                );
              } else {
                return (
                  <a
                    className="hover:cursor-pointer hover:underline"
                    key={index}
                    onClick={() => {
                      fetchWord(word);
                    }}
                  >
                    {", " + word}
                  </a>
                );
              }
            })}
          </span>
        </div>
      )}

      <div>
        <h3></h3>
      </div>
    </div>
  );
};

export default PartOfSpeech;
