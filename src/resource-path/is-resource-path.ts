import {ResourcePath} from "resource-path";
import {isStartsWith} from "starts-with";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ResourcePath}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isResourcePath = (value: unknown): value is ResourcePath => {
  return isStartsWith(value, "/");
};
