//interfaces
import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";

interface SearchProps {
  fetchWord: Function;
}

const Search: React.FunctionComponent<SearchProps> = ({ fetchWord }) => {
  const [search, setSearch] = useState<string>("");
  const [blank, setBlank] = useState<boolean>(false);

  function changeHandle(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);
  }
  async function submitHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBlank(false);

    if (search === "") {
      setBlank(true);
      return;
    } else {
      await fetchWord(search);
    }
  }

  return (
    <div>
      <form
        onSubmit={submitHandle}
        className={` bg-[#F4F4F4] dark:bg-[#1F1F1F] rounded-2xl	${
          blank
            ? "border border-solid border-[#FF5252] "
            : "hover:border-[#A445ED] hover:border"
        }  flex justify-between outline-none h-[48px]`}
      >
        <input
          type="text"
          onChange={changeHandle}
          value={search}
          className={`w-full bg-[#F4F4F4] caret-[#A445ED] dark:bg-[#1F1F1F]  rounded-2xl outline-none
          } font-bold text-[16px] indent-5	 text-[#2d2d2d] dark:text-white`}
        />

        <button
          id="search-button"
          type="submit"
          className="absolute right-10 w-[17px] h-[17px] top-[87px]"
        >
          {<img src={searchIcon} />}
        </button>
      </form>
      {blank && (
        <p className="text-[#FF5252] h-0 p-1 text-lg leading-6  ">
          Whoops, can’t be empty…
        </p>
      )}
    </div>
  );
};

export default Search;
