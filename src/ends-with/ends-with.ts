/**
 * A type of string that ends with the given generic string.
 */
export type EndsWith<GenericString extends string> =
  `${string}${GenericString}`;
