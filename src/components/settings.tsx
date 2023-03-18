import { useState } from "react";
import bookIcon from "../assets/images/logo.svg";
import Switch from "react-switch";
const Settings: React.FunctionComponent<SettingsProps> = ({
  setFont,
  setNight,
}) => {
  //state

  return (
    <div className="flex">
      <img src={bookIcon}></img>
      <Dropdown setFont={setFont} />
    </div>
  );
};

interface SettingsProps {
  setFont: (val: string) => void;
  setNight: (val: boolean) => void;
}

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

//night mode selector

export default Settings;
