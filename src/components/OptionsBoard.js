import { MODES } from "./constants";
import ImageBox from "./ImageBox";
import "./OptionsBoard.css";

const OptionsBoard = ({ selector, selection, isThisTheUser = false }) => {
  // Add another class to denote human vs computer sides.
  const elements = Object.keys(MODES).map((mode) => {
    const extraStyles = selection === mode ? ["selected"] : [];
    return (
      <ImageBox
        mode={mode}
        selector={selector}
        isThisTheUser={isThisTheUser}
        extraStyles={extraStyles}
      />
    );
  });

  return <div className="options-board">{elements}</div>;
};

export default OptionsBoard;
