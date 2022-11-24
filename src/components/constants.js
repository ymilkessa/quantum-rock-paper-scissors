export const MODES = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

export const MODE_VALUES = [MODES.ROCK, MODES.PAPER, MODES.SCISSORS];

export const GAME_STATES = {
  SELECT_MODE: 0,
  COMPUTING_RESULT: 1,
  POST_ROUND: 2,
};

export const PLAYERS = {
  USER: 1,
  QRNG: 2,
};

export const GAME_RESULT = {
  ...PLAYERS,
  TIE: 3,
};

export const DOES_A_BEAT_B = {
  [MODES.ROCK + MODES.PAPER]: false,
  [MODES.PAPER + MODES.SCISSORS]: false,
  [MODES.SCISSORS + MODES.ROCK]: false,
  [MODES.ROCK + MODES.SCISSORS]: true,
  [MODES.SCISSORS + MODES.PAPER]: true,
  [MODES.PAPER + MODES.ROCK]: true,
};

export const UINT_CARDINALITY = 256;
