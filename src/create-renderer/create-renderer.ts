import {Component} from "component";

/**
 * Create a function that can render a {@link Component} array.
 */
export const createRenderer = (): ((components: Component[]) => void) => {
  return (components: Component[]) => {
    console.log("render components!", components);
  };
};
