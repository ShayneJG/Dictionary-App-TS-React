//interface

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

interface DefinitionProps {
  data: object;
}

interface WordDefinition {
  word: string;
  phonetic: string;
  phonetics: [
    {
      text: string;
      audio: AudioContext;
    },
    {
      text: string;
    }
  ];
  origin: string;
  meanings: [
    {
      partOfSpeech: string;
      definitions: [
        {
          definition: string;
          example: string;
          synonyms: Array<string>;
          antonyms: Array<string>;
        }
      ];
    },
    {
      partOfSpeech?: string;
      definitions?: [
        {
          definition: string;
          example: string;
          synonyms: Array<string>;
          antonyms: Array<string>;
        }
      ];
    },
    {
      partOfSpeech?: string;
      definitions?: [
        {
          definition: string;
          example: string;
          synonyms: Array<string>;
          antonyms: Array<string>;
        }
      ];
    }
  ];
}

const Definition: React.FC<DefinitionProps> = ({ data }) => {
  return <div></div>;
};

export default Definition;
