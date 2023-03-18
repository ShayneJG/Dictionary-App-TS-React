import { useState } from "react";
import bookIcon from "../assets/images/logo.svg";
import Switch from "react-switch";
import moonIcon from "../assets/images/icon-moon.svg";

//interfaces
interface SettingsProps {
  setFont: (val: string) => void;
  setNight: React.Dispatch<React.SetStateAction<boolean>>;
  night: boolean;
}
interface NightmodeProps {
  setNight: React.Dispatch<React.SetStateAction<boolean>>;
  night: boolean;
}

const Settings: React.FunctionComponent<SettingsProps> = ({
  setFont,
  setNight,
  night,
}) => {
  return (
    <div className="flex flex-row mt-10">
      <div className="w-1/2">
        <img src={bookIcon}></img>
      </div>
      <div className=" w-1/2 flex justify-end content-center">
        <Dropdown setFont={setFont} />
        <div className="border border-solid"></div>

        <Nightmode setNight={setNight} night={night} />

        <img src={moonIcon}></img>
      </div>
    </div>
  );
};

//font selector
const Dropdown: React.FunctionComponent<{ setFont: (val: string) => void }> = ({
  setFont,
}): JSX.Element => {
  function changeHandle(e: React.ChangeEvent<HTMLSelectElement>) {
    //function to handle option selection and call setFont
    setFont(e.currentTarget.value);
  }

  return (
    <div className="flex">
      <select
        onChange={changeHandle}
        className={"outline-none	appearance-none pr-10"}
      >
        <option selected value="sans serif">
          Sans Serif
        </option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
    </div>
  );
};

//nightmode slider
const Nightmode: React.FunctionComponent<NightmodeProps> = ({
  setNight,
  night,
}) => {
  function changeHandle() {
    setNight((prev) => !prev);
  }

  return <Switch checked={night} onChange={changeHandle} className="m-auto" />;
};

//night mode selector

export default Settings;
