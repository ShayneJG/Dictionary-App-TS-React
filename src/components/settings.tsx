import bookIcon from "../assets/images/logo.svg";
import Switch from "react-switch";

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

        <div className="flex justify-end ml-5 ">
          <Nightmode setNight={setNight} night={night} />

          <Moon stroke={night ? "#A445ED" : "#838383"} />
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
    <div className="flex border-r border-[#e9e9e9]">
      <select
        onChange={changeHandle}
        className={
          "outline-none text-[#2d2d2d] dark:text-white  dark:bg-[#050505] hover:bg-white font-bold text-sm	appearance-none text-left leading-6	 pr-8 mr-3"
        }
      >
        <option value="font-sans">Sans Serif</option>
        <option value="font-serif">Serif</option>
        <option value="font-mono">Mono</option>
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
