//interfaces
import searchIcon from "../assets/images/icon-search.svg";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  getWord: Function;
}

const Search: React.FunctionComponent<SearchProps> = ({
  search,
  setSearch,
  getWord,
}) => {
  function changeHandle(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);
  }
  function submitHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    getWord();
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
