import {Color} from "color";

/**
 * An object with a `color` property whose value is a generic {@link Color}.
 */
export interface Colored<GenericColor extends Color = Color> {
  color: GenericColor;
}
