import "./BattleField.css";
import ImageBox from "./ImageBox";

const BattleField = ({ userSelection, randomSelection }) => {
  return (
    <div className="battlefield">
      {userSelection ? <ImageBox mode={userSelection} /> : null}
      {randomSelection ? <ImageBox mode={randomSelection} /> : null}
    </div>
  );
};

export default BattleField;
