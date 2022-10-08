import {Component} from "component";
import {ComponentIndex} from "component-index";
import {FramesPerSecond} from "frames-per-second";
import {getFrameDuration} from "get-frame-duration";
import {updateComponents} from "update-components";

/**
 * Create the loop that updates the state of the game each frame.
 * @param params The config options
 * @param params.framesPerSecond The number of times per second to update the state of the game.
 * @param params.getNewComponents A callback function that derives the next state of the game.
 * @param params.getOldComponents A callback function that returns the current state of the game.
 * @param params.getIndexers A callback function that returns an array of component indexers.
 * @param params.setComponents A callback function that sets the state of the game.
 */
export const createUpdateComponentsLoop = ({
  framesPerSecond,
  getNewComponents,
  getOldComponents,
  getIndexers,
  setComponents,
}: {
  framesPerSecond: FramesPerSecond;
  getNewComponents: (props: { componentIndex: ComponentIndex }) => Component[];
  getOldComponents: () => Component[];
  getIndexers: () => ((component: Component) => boolean)[];
  setComponents: (components: Component[]) => void;
}) => {
  const frameDuration = getFrameDuration({ framesPerSecond });

  setInterval(() => {
    updateComponents({
      getNewComponents,
      getOldComponents,
      getIndexers,
      setComponents,
    });
  }, frameDuration);
};
