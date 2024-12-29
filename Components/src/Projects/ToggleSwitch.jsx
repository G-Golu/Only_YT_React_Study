import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { TfiApple } from "react-icons/tfi";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "#f44336" };

  //subscribe to Thapa Technical Youtube Channel - https://www.youtube.com/thapatechnical
  return (
    <>
    

    {/** this is h1 tag all element cant take online serh react icon and past "import ..."  and past this line ..*/}
      <h1 style={{ color: "#000", textAlign: "center" }}>
        Toggle Switch{" "}
        <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
        <PiUserSwitchFill style={{ color: "black", textAlign: "center" }} />
        
        <CiLock style={{ color: "green", textAlign: "center" }}/>
      </h1><TfiApple style={{ color: "green", textAlign: "center"  }} />  

      
      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};