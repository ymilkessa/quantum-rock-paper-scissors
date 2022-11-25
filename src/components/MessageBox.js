import "./MessageBox.css";
import { GAME_RESULT, GAME_STATES, PLAYERS } from "./constants";

const MessageBox = ({
  currentState,
  selection,
  setGameState,
  player = PLAYERS.QRNG,
  gameWinner = null,
  restartGame = null,
}) => {
  let messageToDisplay = "";
  let buttonAction = null;
  let buttonCaption = "";
  let messageThemes = [];
  switch (currentState) {
    case GAME_STATES.WAITING_SELECTION:
      if (player === PLAYERS.USER) {
        messageToDisplay = "What will you go with?";
      }
      break;
    case GAME_STATES.SELECT_MODE:
      if (player === PLAYERS.USER) {
        messageToDisplay = `Confirm ${selection}?`;
        buttonCaption = `Confirm`;
        buttonAction = () => setGameState(GAME_STATES.GETTING_RANDOM_NUMBER);
      }
      break;
    case GAME_STATES.GETTING_RANDOM_NUMBER:
      if (player === PLAYERS.QRNG)
        messageToDisplay = "... Preparing to send request ...";
      break;
    case GAME_STATES.COMPUTING_RESULT:
      if (player === PLAYERS.QRNG)
        messageToDisplay = "Getting random number from QRNG...";
      break;
    case GAME_STATES.POST_ROUND:
      if (gameWinner === player) {
        messageThemes.push("victory-theme");
        messageToDisplay =
          player === PLAYERS.USER ? "You won!!" : "~~QRNG Wins~~";
      } else if (gameWinner === GAME_RESULT.TIE) {
        messageToDisplay =
          player === PLAYERS.USER ? "Tied, try again" : "~~Tied~~";
      } else {
        messageToDisplay =
          player === PLAYERS.USER ? "Sorry, try again" : "__:(__";
      }
      if (player === PLAYERS.USER) {
        buttonCaption = "New Game";
        buttonAction = restartGame || null;
      }
      break;
    default:
      break;
  }
  let textClasses = "message-box-content";
  messageThemes.forEach((theme) => (textClasses += ` ${theme}`));
  return (
    <div className="message-box">
      <div className={textClasses}>{messageToDisplay}</div>
      <div className="message-box-content">
        {buttonAction ? (
          <button onClick={buttonAction} className="confirm-button">
            {buttonCaption}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MessageBox;
