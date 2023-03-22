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
        <h1>{meaning.partOfSpeech}</h1>
        <div className="border border-solid w-full h-0 m-auto ml-5"></div>
      </div>
      <div>
        <h2>Meaning</h2>
        <ul>
          {meaning.definitions.map((arr, index) => {
            return (
              <li key={index} className="list-disc ">
                {arr.definition}
              </li>
            );
          })}
        </ul>
      </div>
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

      <div>
        <h3></h3>
      </div>
    </div>
  );
};

export default PartOfSpeech;
