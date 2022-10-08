import {FramesPerSecond} from "frames-per-second";
import {Milliseconds} from "milliseconds";

/**
 * Get the duration of a frame in {@link Milliseconds} for the given the number of {@link FramesPerSecond}
 * @param params The config options
 * @param params.framesPerSecond The number of frames per second.
 */
export const getFrameDuration = ({
  framesPerSecond,
}: {
  framesPerSecond: FramesPerSecond;
}): Milliseconds => {
  return 1000 / framesPerSecond;
};
