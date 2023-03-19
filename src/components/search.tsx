//interfaces
import searchIcon from "../assets/images/icon-search.svg";
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
  function submitHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(e.currentTarget.elements[0]);
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
