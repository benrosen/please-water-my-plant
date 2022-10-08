/**
 * A type of string that contains the given generic string.
 */
export type Contains<GenericString extends string> =
  `${string}${GenericString}${string}`;
