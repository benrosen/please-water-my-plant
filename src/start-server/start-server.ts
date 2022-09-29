import {config} from "../../package.json";
import {createServer} from "../create-server";
import {getIndexers} from "../get-indexers";
import {getNewComponents} from "../get-new-components";

/**
 * Start a game server using the configuration settings in the project's package file.
 * Return a callback that stops the game server.
 */
export const startServer = (): (() => Promise<void>) => {
  const { framesPerSecond, port } = config;

  const server = createServer({
    framesPerSecond,
    getNewComponents,
    getIndexers,
  });

  const application = server.listen(port);

  return async () => {
    return new Promise((resolve, reject) => {
      application.on("close", resolve);
      application.on("error", reject);

      application.close();
    });
  };
};
