import { MODES } from "./constants";
import ImageBox from "./ImageBox";
import "./OptionsBoard.css";

const OptionsBoard = ({
  selector,
  selection,
  currentState,
  setGameState,
  isThisTheUser = false,
}) => {
  // Add another class to denote human vs computer sides.
  const elements = Object.values(MODES).map((mode) => {
    const extraStyles = selection === mode ? ["selected"] : [];
    return (
      <ImageBox
        mode={mode}
        selector={selector}
        currentState={currentState}
        setGameState={setGameState}
        isThisTheUser={isThisTheUser}
        extraStyles={extraStyles}
        key={mode + isThisTheUser}
      />
    );
  });

  return <div className="options-board">{elements}</div>;
};

export default OptionsBoard;
