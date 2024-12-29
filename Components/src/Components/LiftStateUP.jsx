import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

// Define PropTypes for InputComponent
InputComponent.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

const DisplayComponent = ({ inputValue }) => {
  return <p>The current input value is: {inputValue}</p>;
};

// Define PropTypes for DisplayComponent
DisplayComponent.propTypes = {
  inputValue: PropTypes.string.isRequired,
};
