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
};

const PartOfSpeech: React.FC<PartOfSpeechProps> = ({ meaning, fetchWord }) => {
  return (
    <div>
      <div className="flex">
        <h1 className="font-bold italic text-lg">{meaning.partOfSpeech}</h1>
        <div className=" border border-solid w-full m-auto ml-3 border-[#e9e9e9]/50"></div>
      </div>
      <div>
        <h2 className="text-base mt-5 mb-3	text-[#757575]">Meaning</h2>
        <ul className="ml-4 list-disc marker:text-[#8f19e8] marker:text-sm">
          {meaning.definitions.map((arr, index) => {
            return (
              <li className="mb-3 text-[15px] pl-2 text-[#2d2d2d]	" key={index}>
                {arr.definition}
              </li>
            );
          })}
        </ul>
      </div>

      {meaning.synonyms[0] && (
        <div className="flex">
          <h2>Synonyms</h2>
          <span className="ml-5">
            {meaning.synonyms.map((word, index) => {
              if (index === 0) {
                return (
                  <a
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
