import { useState } from "react";
import arrowDown from "../assets/images/icon-arrow-down.svg";

const Settings: React.FunctionComponent<SettingsProps> = ({
  setFont,
  setNight,
}) => {
  //state

  const [open, setOpen] = useState<boolean>(false);

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

  return (
    <div>
      <select onChange={changeHandle}>
        <option selected value="sans serif">
          Sans Serif
        </option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
      <img src={arrowDown}></img>
    </div>
  );
};

export default Settings;
