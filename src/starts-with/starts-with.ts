/**
 * A type of string that starts with the given generic string.
 */
export type StartsWith<GenericString extends string> =
  `${GenericString}${string}`;
