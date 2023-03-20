//interface

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

interface DefinitionProps {
  data: object | undefined | null;
}

const Definition: React.FC<DefinitionProps> = ({ data }) => {
  return (
    <div>
      <h1>{}</h1>
    </div>
  );
};

export default Definition;
