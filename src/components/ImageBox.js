import { useState } from "react";
import Draggable from "react-draggable";
import { MODES } from "./constants";
import "./ImageBox.css";

const ImageBox = ({
  mode,
  selector = null,
  isThisTheUser = false,
  extraStyles = [],
}) => {
  // Create variables for the coordinates of this object.
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const setSelection = selector ? () => selector(mode) : null;
  const imageName = MODES[mode];

  const theImage = require(`./${imageName}.png`);
  let styleClasses = `image-box`;
  extraStyles.forEach((styleClass) => (styleClasses += ` ${styleClass}`));
  return (
    <Draggable
      // Disable dragging until we figure out how to use it
      disabled={true}
      onDrag={(_error, data) => {
        setPosition({ x: data.x, y: data.y });
        console.log(JSON.stringify(position));
      }}
    >
      <div
        className={styleClasses}
        onClick={isThisTheUser ? setSelection : null}
      >
        <img src={theImage} alt={imageName} />
      </div>
    </Draggable>
  );
};

export default ImageBox;
