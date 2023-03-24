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
        className=" bg-[#F4F4F4] rounded-2xl	 flex justify-between outline-none h-[48px]"
      >
        <input
          type="text"
          onChange={changeHandle}
          value={search}
          className="w-full bg-[#F4F4F4]  rounded-2xl	 font-bold text-sm	indent-2.5	 text-[#2d2d2d]"
        />
        <button
          id="search-button"
          type="submit"
          className="absolute right-10 w-[16px] h-[16px] top-[87px]"
        >
          {<img src={searchIcon} />}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;
