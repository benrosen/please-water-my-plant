import {Component} from "component";
import * as EventSource from "eventsource";
import {Order} from "order";
import {ComponentsResourcePath} from "../components-resource-path";
import {OrderResourcePath} from "../order-resource-path";

/**
 * Invoke a callback function when {@link Component} messages are received from the server.
 * Return a function that can post {@link Order} requests to the server.
 * @param params The config options
 * @param params.handleOnComponentsChanged A callback function that handles newly received server-sent {@link Component} arrays
 */
export const createClient = ({
  handleOnComponentsChanged,
}: {
  handleOnComponentsChanged: (components: Component[]) => void;
}): ((order: Order) => void) => {
  const onComponentsChanged = new EventSource(ComponentsResourcePath);

  onComponentsChanged.onmessage = (event) => {
    const components = JSON.parse(event.data);

    handleOnComponentsChanged(components);
  };

  return async (order: Order) => {
    await fetch(OrderResourcePath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
  };
};
