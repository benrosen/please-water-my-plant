import * as EventSource from "eventsource";
import * as http from "http";
import { config } from "../../package.json";
import { AcceptedStatusCode } from "../accepted-status-code";
import { ComponentsResourcePath } from "../components-resource-path";
import { Order } from "../order";
import { OrderResourcePath } from "../order-resource-path";
import { startServer } from "./start-server";

const { port } = config;

describe("The startServer function", () => {
  describe("should start a server at the expected host name and port number", () => {
    describe("that", () => {
      describe("should have an endpoint named", () => {
        describe("order", () => {
          describe("that", () => {
            it("should accept POST requests", (done) => {
              const stopServer = startServer();

              const data: Order = {
                entityId: "foo",
                id: "bar",
                timestamp: 0,
              };

              const serializedData = JSON.stringify(data);

              const request = http.request(
                {
                  hostname: "localhost",
                  port,
                  path: OrderResourcePath,
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Content-Length": serializedData.length,
                  },
                },
                async (response) => {
                  expect(response.statusCode).toStrictEqual(AcceptedStatusCode);

                  request.end();

                  await stopServer();

                  done();
                }
              );

              request.write(serializedData);

              request.end();
            });
          });
        });

        describe("components", () => {
          describe("that", () => {
            it("should accept GET requests", (done) => {
              const stopServer = startServer();

              const componentsUrl = `http://localhost:${port}${ComponentsResourcePath}`;

              const eventSource = new EventSource(componentsUrl);

              eventSource.onopen = async () => {
                expect.anything();

                eventSource.close();

                await stopServer();

                done();
              };
            });
          });
        });
      });
    });
  });
});
