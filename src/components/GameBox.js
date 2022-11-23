import { useEffect, useState } from "react";
import BattleField from "./BattleField";
import OptionsBoard from "./OptionsBoard";

const GameBox = () => {
  const [userSelection, setUserSelection] = useState(null);
  const [randomSelection, setRandomSelection] = useState(null);
  useEffect(() => {
    console.log(userSelection);
    console.log(randomSelection);
  }, [userSelection, randomSelection]);
  return (
    <div className="square-container">
      <OptionsBoard
        selector={setRandomSelection}
        selection={randomSelection}
        isThisTheUser={false}
      />
      <BattleField
        userSelection={userSelection}
        randomSelection={randomSelection}
      />
      <OptionsBoard
        selector={setUserSelection}
        selection={userSelection}
        isThisTheUser={true}
      />
    </div>
  );
};

export default GameBox;
