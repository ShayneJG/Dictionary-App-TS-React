import React, { useState } from "react";

interface DropdownProps {
  setFont: React.Dispatch<React.SetStateAction<string>>;
  font: string;
}

export const Dropdown: React.FunctionComponent<DropdownProps> = ({
  setFont,
  font,
}) => {
  const [isOpen, setIsOpen] = useState<boolean | React.SetStateAction<boolean>>(
    false
  );
  const [current, setCurrent] = useState<string>("Sans Serif");

  function handleSelectFont(text: string) {
    setFont(text);
    setIsOpen(false);

    switch (text) {
      default:
        setCurrent("Sans Serif");
        break;
      case "font-serif":
        setCurrent("Serif");
        break;
      case "font-mono":
        setCurrent("Mono");
    }
  }
  return (
    <div className="flex flex-col relative border-r h-8 pr-5 justify-center border-[#e9e9e9] ">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex hover:cursor-pointer"
      >
        <span className="font-bold text-sm text-end pr-3 w-24 text-[#2D2D2D] dark:text-white">
          {current}
        </span>
        <svg
          className="m-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeWidth="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="z-10 flex flex-col text-[#2D2D2D] dark:text-white dark:bg-[#1F1F1F] justify-between absolute w-[183px] h-[152px] p-6 rounded-2xl  bg-white top-10 right-[2px] shadow-lg shadow-[#A445ED]">
          <div
            className="font-sans font-bold hover:text-[#A445ED] hover:cursor-pointer"
            onClick={() => handleSelectFont("font-sans")}
          >
            Sans serif
          </div>
          <div
            className="font-serif font-bold hover:text-[#A445ED] hover:cursor-pointer"
            onClick={() => handleSelectFont("font-serif")}
          >
            Serif
          </div>
          <div
            className="font-mono font-bold hover:text-[#A445ED] hover:cursor-pointer"
            onClick={() => handleSelectFont("font-mono")}
          >
            Mono
          </div>
        </div>
      )}
    </div>
  );
};
