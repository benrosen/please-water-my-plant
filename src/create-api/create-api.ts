import {AntagonistPagePath} from "antagonist-page-path";
import bodyParser from "body-parser";
import {CloseEventName} from "close-event-name";
import {Component} from "component";
import {ComponentsResourcePath} from "components-resource-path";
import cors from "cors";
import express from "express";
import {HomePagePath} from "home-page-path";
import {OK_STATUS_CODE} from "ok-status-code";
import {Order} from "order";
import {OrderResourcePath} from "order-resource-path";
import {parseOrderFromRequest} from "parse-order-from-request";
import * as path from "path";
import {ProtagonistPagePath} from "protagonist-page-path";
import {respondWithAccepted} from "respond-with-accepted";
import {respondWithBadRequestError} from "respond-with-bad-request-error";
import {respondWithInternalServerError} from "respond-with-internal-server-error";
import {ServerSentEventHeaders} from "server-sent-event-headers";

/**
 * Create an API for posting {@link Order} objects, getting {@link Component} updates, and serving HTML pages.
 * @param params The config options
 * @param params.onOrderPosted A callback function to handle each newly posted {@link Order}.
 * @param params.registerOnComponentsChangedHandler A higher-order function that registers a callback that can send {@link Component} updates via server-sent events.
 */
export const createApi = ({
  onOrderPosted,
  registerOnComponentsChangedHandler,
}: {
  onOrderPosted: (order: Order) => void;
  registerOnComponentsChangedHandler: (
    handleOnComponentsChanged: (components: Component[]) => void
  ) => () => void;
}) => {
  const server = express();

  server.use(bodyParser.json());

  server.use(bodyParser.urlencoded({ extended: false }));

  server.use(cors());

  server.use(HomePagePath, express.static("src/home-page"));

  server.use(AntagonistPagePath, express.static("src/antagonist-page"));

  server.use(ProtagonistPagePath, express.static("src/protagonist-page"));

  server.get(ComponentsResourcePath, (request, response) => {
    response.writeHead(OK_STATUS_CODE, ServerSentEventHeaders);

    response.flushHeaders();

    const deregisterOnComponentsChangedHandler =
      registerOnComponentsChangedHandler((components: Component[]) => {
        response.write(`data: ${JSON.stringify(components)}\n\n`);
      });

    response.on(CloseEventName, deregisterOnComponentsChangedHandler);
  });

  server.post(OrderResourcePath, (request, response) => {
    try {
      const order = parseOrderFromRequest({ request });

      if (order === undefined) {
        return respondWithBadRequestError({ response });
      }

      onOrderPosted(order);

      return respondWithAccepted({ response });
    } catch {
      return respondWithInternalServerError({ response });
    }
  });

  server.use((request, response) => {
    response.status(404);

    if (request.accepts("html")) {
      response.sendFile(path.join(__dirname, "../not-found-page/index.html"));

      return;
    }

    if (request.accepts("json")) {
      response.json({ error: "Not found" });

      return;
    }

    response.type("txt").send("Not found");
  });

  return server;
};
