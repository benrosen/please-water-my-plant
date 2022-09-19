import {Integer} from "../integer";
import {PositiveNumber} from "../positive-number";

/**
 * The number of times per second that the game should be updated.
 */
export type FramesPerSecond = Integer & PositiveNumber;
