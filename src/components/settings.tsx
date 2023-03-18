import { useState } from "react";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import bookIcon from "../assets/images/logo.svg";

const Settings: React.FunctionComponent<SettingsProps> = ({
  setFont,
  setNight,
}) => {
  //state

  return (
    <div>
      <Dropdown setFont={setFont} />
    </div>
  );
};

interface SettingsProps {
  setFont: (val: string) => void;
  setNight: (val: boolean) => void;
}

const Dropdown: React.FunctionComponent<{ setFont: (val: string) => void }> = ({
  setFont,
}): JSX.Element => {
  function changeHandle(e: React.ChangeEvent<HTMLSelectElement>) {
    //function to handle option selection and call setFont
    setFont(e.currentTarget.value);
  }

  //state
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <img src={bookIcon}></img>
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

export default Settings;
