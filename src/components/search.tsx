//interfaces

import { ReactElement } from "react";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FunctionComponent<SearchProps> = ({
  search,
  setSearch,
}) => {
  function changeHandle(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);
  }
  return (
    <div>
      <input
        type="text"
        className="border border-solid"
        value={search}
        onChange={changeHandle}
      />
    </div>
  );
};

export default Search;
