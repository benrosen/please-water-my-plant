import {isComponent} from "../component";
import {isTimestamped} from "../timestamped";
import {Order} from "./order";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Order}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isOrder = (value: unknown): value is Order => {
  return isTimestamped(value) && isComponent(value);
};
