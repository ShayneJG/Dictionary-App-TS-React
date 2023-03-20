//interfaces
import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";

interface SearchProps {
  fetchWord: Function;
}

const Search: React.FunctionComponent<SearchProps> = ({ fetchWord }) => {
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string>("");

  function changeHandle(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);
  }
  async function submitHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await fetchWord(search);
    } catch (error: any) {
      setError(error.message);
    }
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;
