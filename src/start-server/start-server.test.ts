import { ACCEPTED_STATUS_CODE } from "accepted-status-code";
import { ComponentsResourcePath } from "components-resource-path";
import EventSource from "eventsource";
import * as http from "http";
import { Order } from "order";
import { OrderResourcePath } from "order-resource-path";
import { startServer } from "start-server";
import { config } from "../../package.json";

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
                entityId: "6C75AB0F-EB42-484E-9159-008D99127697",
                id: "578D9FCE-89F7-41A1-9074-E6CE8F338C0F",
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
                  expect(response.statusCode).toStrictEqual(
                    ACCEPTED_STATUS_CODE
                  );

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
