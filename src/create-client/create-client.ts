import {Component} from "component";
import {createComponentsChangedEventSource} from "create-components-changed-event-source";
import {IdentifiedByUuid} from "identified-by-uuid";
import {Order} from "order";
import {RoleRelated} from "role-related";

/**
 * Invoke a callback function when {@link Component} messages are received from the server.
 * Return a function that can post {@link Order} requests to the server.
 * @param params The config options
 * @param params.handleOnComponentsChanged A callback function that handles newly received server-sent {@link Component} arrays
 */
export const createClient = ({
  handleOnComponentsChanged,
  id,
  role,
}: IdentifiedByUuid &
  RoleRelated & {
    handleOnComponentsChanged: (components: Component[]) => void;
  }) => {
  const componentsChangedEventSource = createComponentsChangedEventSource({
    id,
    role,
  });

  componentsChangedEventSource.onmessage = (event) => {
    const components = JSON.parse(event.data);

    handleOnComponentsChanged(components);
  };
};
