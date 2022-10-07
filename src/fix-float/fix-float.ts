import {config} from "../../package.json";

/**
 * Convert a floating-point number to a fixed-point number.
 * @param float The floating-point number to fix.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 */
export const fixFloat = (float: number): number => {
  return +float.toFixed(config.fixedPointDecimalPlaces);
};
