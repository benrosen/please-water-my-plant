import {fixFloat} from "../fix-float";
import {Vector} from "../vector";

/**
 * Convert a {@link Vector} instance's floating-point values to fixed-point values.
 * @param vector The {@link Vector} containing the values to fix.
 */
export const fixVector = (vector: Vector): Vector => {
  return {
    x: fixFloat(vector.x),
    y: fixFloat(vector.y),
  };
};
