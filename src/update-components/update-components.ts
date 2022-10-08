import {Component} from "component";
import {ComponentIndex} from "component-index";
import {createComponentIndex} from "create-component-index";

/**
 * Update an array of {@link Component} instances representing the state of the game.
 * @param params The config options
 * @param params.getNewComponents A callback function that derives the next state of the game.
 * @param params.getOldComponents A callback function that returns the current state of the game.
 * @param params.getIndexers A callback function that returns an array of component indexers.
 * @param params.setComponents A callback function that sets the state of the game.
 */
export const updateComponents = ({
  getNewComponents,
  getOldComponents,
  getIndexers,
  setComponents,
}: {
  getNewComponents: (props: { componentIndex: ComponentIndex }) => Component[];
  getOldComponents: () => Component[];
  getIndexers: () => ((component: Component) => boolean)[];
  setComponents: (components: Component[]) => void;
}) => {
  const indexers = getIndexers();

  const oldComponents = getOldComponents();

  const componentIndex = createComponentIndex({
    components: oldComponents,
    indexers,
  });

  const newComponents = getNewComponents({
    componentIndex,
  });

  setComponents(newComponents);
};
