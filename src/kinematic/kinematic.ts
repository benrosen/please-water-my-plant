import {Acceleration} from "acceleration";
import {Velocity} from "velocity";

/**
 * Represents a physical object in motion.
 */
export interface Kinematic {
  acceleration: Acceleration;
  velocity: Velocity;
}
