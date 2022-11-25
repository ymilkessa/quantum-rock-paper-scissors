import { GAME_STATES } from "./constants";
import "./ImageBox.css";

const ImageBox = ({
  mode,
  selector = null,
  currentState,
  setGameState,
  isThisTheUser = false,
  extraStyles = [],
}) => {
  // Create variables for the coordinates of this object.
  const imageName = mode;

  const makeSelection = () => {
    if (
      currentState === GAME_STATES.SELECT_MODE ||
      currentState === GAME_STATES.WAITING_SELECTION
    ) {
      selector(mode);
      if (currentState === GAME_STATES.WAITING_SELECTION)
        setGameState(GAME_STATES.SELECT_MODE);
    }
  };

  const theImage = require(`./${imageName}.png`);
  let styleClasses = `image-box`;
  extraStyles.forEach((styleClass) => (styleClasses += ` ${styleClass}`));
  return (
    <div
      className={styleClasses}
      onClick={isThisTheUser ? makeSelection : null}
    >
      <img src={theImage} alt={imageName} />
    </div>
  );
};

export default ImageBox;
