import "./BattleField.css";
import ImageBox from "./ImageBox";

const BattleField = ({ userSelection, randomSelection }) => {
  return (
    <div className="battlefield">
      <div className="battle-side">
        {userSelection ? <ImageBox mode={userSelection} /> : null}
      </div>
      <div className="battle-side">
        {randomSelection ? <ImageBox mode={randomSelection} /> : null}
      </div>
    </div>
  );
};

export default BattleField;
