/**
 * A vector represents a two-dimensional numeric value.
 */
export interface Vector<GenericNumber extends number = number> {
  x: GenericNumber;
  y: GenericNumber;
}
