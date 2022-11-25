import "./MessageBox.css";
import { GAME_STATES, MODES, PLAYERS } from "./constants";

const MessageBox = ({
  currentState,
  selection,
  setGameState,
  player = PLAYERS.QRNG,
  gameWinner = null,
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
        messageToDisplay = `Confirm ${MODES[selection]}?`;
        buttonCaption = `Confirm`;
        buttonAction = () => setGameState(GAME_STATES.COMPUTING_RESULT);
      }
      break;
    case GAME_STATES.COMPUTING_RESULT:
      if (player === PLAYERS.QRNG)
        messageToDisplay = "Making random selection...";
      break;
    case GAME_STATES.POST_ROUND:
      const thisPlayerWon = gameWinner === player;
      if (thisPlayerWon) {
        messageThemes.push("victory-theme");
        messageToDisplay =
          player === PLAYERS.USER ? "You won!!" : "~I~beat~you~";
      } else {
        messageToDisplay =
          player === PLAYERS.USER ? "Sorry, try again" : "__:(__";
      }
      break;
    default:
      break;
  }
  let textClasses = "message-box-content";
  messageThemes.forEach((theme) => (textClasses += ` ${theme}`));
  return (
    <div class="message-box">
      <div class={textClasses}>{messageToDisplay}</div>
      <div class="message-box-content">
        {buttonAction ? (
          <button onClick={buttonAction} class="confirm-button">
            {buttonCaption}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MessageBox;
