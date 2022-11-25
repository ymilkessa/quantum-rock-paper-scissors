import { useEffect, useState } from "react";
import BattleField from "./BattleField";
import {
  DOES_A_BEAT_B,
  GAME_RESULT,
  GAME_STATES,
  MODE_VALUES,
  PLAYERS,
} from "./constants";
import OptionsBoard from "./OptionsBoard";
import "./GameBox.css";
import { getRandomIndexForGame } from "./quantumRandom";
import MessageBox from "./MessageBox";

const GameBox = () => {
  const [userSelection, setUserSelection] = useState(null);
  const [randomSelection, setRandomSelection] = useState(null);
  const [currentState, setGameState] = useState(GAME_STATES.WAITING_SELECTION);
  const [gameWinner, setGameWinner] = useState(null);

  // This effect is for setting the option for quantum computer
  useEffect(() => {
    if (currentState !== GAME_STATES.GETTING_RANDOM_NUMBER) {
      return;
    }

    async function setQuantumSelection() {
      if (currentState === GAME_STATES.GETTING_RANDOM_NUMBER) {
        let randomIndex = null;
        setGameState(GAME_STATES.COMPUTING_RESULT);
        while (randomIndex === null) {
          randomIndex = await getRandomIndexForGame();
        }
        setRandomSelection(MODE_VALUES[randomIndex]);
      }
    }
    setQuantumSelection();
  }, [currentState, randomSelection]);

  // Effect to declare winner/loser after both selection are made
  useEffect(() => {
    if (!userSelection || !randomSelection) {
      return;
    }
    if (userSelection === randomSelection) {
      setGameWinner(GAME_RESULT.TIE);
    } else {
      const didUserWin = DOES_A_BEAT_B[userSelection + randomSelection];
      didUserWin
        ? setGameWinner(GAME_RESULT.USER)
        : setGameWinner(GAME_RESULT.QRNG);
    }
    setGameState(GAME_STATES.POST_ROUND);
  }, [userSelection, randomSelection]);

  /**
   * Emplties selections and sets game to the beginning.
   */
  const restartGame = () => {
    setUserSelection(null);
    setRandomSelection(null);
    setGameState(GAME_STATES.WAITING_SELECTION);
  };

  return (
    <div className="square-container">
      <OptionsBoard
        selector={setRandomSelection}
        selection={randomSelection}
        currentState={currentState}
        setGameState={setGameState}
        isThisTheUser={false}
      />
      <MessageBox
        currentState={currentState}
        selection={randomSelection}
        setGameState={setGameState}
        player={PLAYERS.QRNG}
        gameWinner={gameWinner}
        restartGame={null}
      />
      <BattleField
        userSelection={userSelection}
        randomSelection={randomSelection}
        currentState={currentState}
        restartGame={restartGame}
      />
      <MessageBox
        currentState={currentState}
        selection={userSelection}
        setGameState={setGameState}
        player={PLAYERS.USER}
        gameWinner={gameWinner}
        restartGame={restartGame}
      />
      <OptionsBoard
        selector={setUserSelection}
        selection={userSelection}
        currentState={currentState}
        setGameState={setGameState}
        isThisTheUser={true}
      />
    </div>
  );
};

// MessageBox = ({
//   currentState,
//   selection,
//   setGameState,
//   player = PLAYERS.QRNG,
//   gameWinner = null,
// })

export default GameBox;
