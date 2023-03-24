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
    <div className="flex flex-row mb-5 h-8 ">
      <div className="w-1/2">
        <img className="h-8" src={bookIcon}></img>
      </div>
      <div className="flex justify-end  ">
        <Dropdown setFont={setFont} />

        <div className="flex justify-end ml-10 ">
          <Nightmode setNight={setNight} night={night} />

          <img className="pl-2" src={moonIcon}></img>
        </div>
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
    <div className="flex border-r">
      <select
        onChange={changeHandle}
        className={
          "outline-none text-[#2d2d2d] font-bold text-sm	appearance-none leading-6	 pr-5 mr-3"
        }
      >
        <option value="font-sans">Sans Serif</option>
        <option value="font-serif">Serif</option>
        <option value="font-mono">Monospace</option>
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

  return (
    <Switch
      checked={night}
      onChange={changeHandle}
      uncheckedIcon={false}
      handleDiameter={14}
      width={40}
      height={20}
      offColor={"#757575"}
      className="m-auto"
    />
  );
};

//night mode selector

export default Settings;
