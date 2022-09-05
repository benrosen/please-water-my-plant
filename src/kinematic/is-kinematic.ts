import {isAcceleration} from "../acceleration";
import {isVelocity} from "../velocity";
import {Kinematic} from "./kinematic";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Kinematic}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isKinematic = (value: unknown): value is Kinematic => {
  return isAcceleration(value["acceleration"]) && isVelocity(value["velocity"]);
};
