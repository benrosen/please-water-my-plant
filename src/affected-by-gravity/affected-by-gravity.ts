import {Kinematic} from "../kinematic";

/**
 * A {@link Kinematic} object that is affected by {@link Gravity}.
 */
export interface AffectedByGravity extends Kinematic {
  affectedByGravity: true;
}
