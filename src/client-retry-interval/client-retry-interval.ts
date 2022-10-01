import {Integer} from "../integer";
import {Milliseconds} from "../milliseconds";

/**
 * The reconnection time.
 * If the connection to the server is lost, the browser will wait for the specified time before attempting to reconnect.
 * This must be an {@link Integer}, specifying the reconnection time in {@link Milliseconds}.
 * If a non-integer value is specified, the field is ignored.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
 */
export const ClientRetryInterval: Milliseconds & Integer = 1000;
