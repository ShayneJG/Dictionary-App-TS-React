import bookIcon from "../assets/images/logo.svg";
import Switch from "react-switch";
import { Dropdown } from "./dropdown";
import { useState } from "react";

//interfaces
interface SettingsProps {
  setFont: React.Dispatch<React.SetStateAction<string>>;
  setNight: React.Dispatch<React.SetStateAction<boolean>>;
  night: boolean;
  font: string;
}
interface NightmodeProps {
  setNight: React.Dispatch<React.SetStateAction<boolean>>;
  night: boolean;
}

const Settings: React.FunctionComponent<SettingsProps> = ({
  setFont,
  font,
  setNight,
  night,
}) => {
  return (
    <div className="flex flex-row mb-5 h-8 relative ">
      <div className="w-1/2">
        <img className="h-8 md:h-9" src={bookIcon}></img>
      </div>
      <div className="flex justify-end items-center absolute right-0 ">
        <Dropdown setFont={setFont} font={font} />

        <div className="flex justify-end ml-5 ">
          <Nightmode setNight={setNight} night={night} />

          <Moon stroke={night ? "#A445ED" : "#838383"} />
        </div>
      </div>
    </div>
  );
};

//font selector

//nightmode slider
const Nightmode: React.FunctionComponent<NightmodeProps> = ({
  setNight,
  night,
}) => {
  function changeHandle() {
    setNight((prev) => !prev);
  }

  return (
    <Switch
      checked={night}
      onChange={changeHandle}
      uncheckedIcon={false}
      checkedIcon={false}
      handleDiameter={14}
      width={40}
      height={20}
      offColor={"#757575"}
      onColor="#A445ED"
      className="m-auto"
    />
  );
};

//night mode selector

//moon icon
const DropdownIndicator: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
    >
      <path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6" />
    </svg>
  );
};

const Moon: React.FunctionComponent<{ stroke: string }> = ({ stroke }) => {
  return (
    <svg
      className="m-auto ml-3"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 22 22"
    >
      <path
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
      />
    </svg>
  );
};
export default Settings;
