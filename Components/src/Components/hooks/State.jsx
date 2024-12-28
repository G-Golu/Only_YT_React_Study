import { useState } from "react";
import PropTypes from "prop-types";

export const State = () => {
  const [count, setCount] = useState(0);

  console.log("Parent Component render");

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </div>
      <ChildComponent count={count} />
    </>
  );
};

// ChildComponent definition
function ChildComponent({ count }) {
  console.log("Child Component rendered");
  return (
    <div className="main-div">
      <h2>Child Component - {count}</h2>
    </div>
  );
}

// Add PropTypes for validation
ChildComponent.propTypes = {
  count: PropTypes.number.isRequired,
};
