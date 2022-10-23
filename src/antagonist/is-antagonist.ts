import {ANTAGONIST, Antagonist} from "./antagonist";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Antagonist}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isAntagonist = (value: unknown): value is Antagonist => {
  return typeof value === "string" && value === ANTAGONIST;
};
