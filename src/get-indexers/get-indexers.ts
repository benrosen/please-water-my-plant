import {isAffectedByGravity} from "../affected-by-gravity";
import {isCollidesWithHero} from "../collides-with-hero";
import {isCollidesWithMob} from "../collides-with-mob";
import {isCollidesWithPlatform} from "../collides-with-platform";
import {isCollidesWithPowerup} from "../collides-with-powerup";
import {ComponentIndexer} from "../component-indexer";
import {isKinematic} from "../kinematic";

/**
 * Return an array of {@link ComponentIndexer} functions.
 */
export const getIndexers = (): ComponentIndexer[] => {
  return [
    isAffectedByGravity,
    isCollidesWithHero,
    isCollidesWithMob,
    isCollidesWithPlatform,
    isCollidesWithPowerup,
    isKinematic,
  ];
};
