import axios from "axios";
import { floor } from "lodash";
import { UINT_CARDINALITY } from "./constants";

/**
 * Get an array of n quantum random 8-bit numbers
 */
const getRandomNumbers = async (n) => {
  // Limits from https://qrng.anu.edu.au/contact/api-documentation/
  if (n < 1 || n > 1024) {
    return [];
  }
  const { data } = await axios.get(
    `https://qrng.anu.edu.au/API/jsonI.php?length=${n}&type=uint8`
  );

  return data;
};

/**
 * Selects a quantum random number normalized to
 * the range [0,1,2]
 */
export const getRandomIndexForGame = async (count = 0) => {
  const { data, success } = await getRandomNumbers(1);
  if (!success && count < 4) {
    return await getRandomIndexForGame(count + 1);
  }
  return success ? floor((3 * data?.[0]) / UINT_CARDINALITY) : null;
};
