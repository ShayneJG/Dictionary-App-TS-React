//interfaces
import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";

interface SearchProps {
  fetchWord: Function;
}

const Search: React.FunctionComponent<SearchProps> = ({ fetchWord }) => {
  const [search, setSearch] = useState<string>("");

  function changeHandle(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);
  }
  function submitHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetchWord(search);
  }

  return (
    <div>
      <form
        onSubmit={submitHandle}
        className="border border-solid flex justify-between"
      >
        <input type="text" onChange={changeHandle} value={search} />
        <button id="search-button" type="submit">
          {<img src={searchIcon} />}
        </button>
      </form>
    </div>
  );
};

export default Search;
