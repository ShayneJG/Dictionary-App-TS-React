//interface

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

interface DefinitionProps {
  data: object | undefined | null;
}

const Definition: React.FC<DefinitionProps> = ({ data }) => {
  return <div></div>;
};

export default Definition;
