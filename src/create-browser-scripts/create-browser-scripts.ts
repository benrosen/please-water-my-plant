import {build, BuildOptions} from "esbuild";

/**
 * Create browser-friendly JavaScript artifacts from TypeScript source code.
 */
export const createBrowserScripts = async () => {
  const config: BuildOptions = {
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: "node",
    target: ["chrome58", "firefox57", "safari11", "edge18"],
  };

  const entryPoints: string[] = [
    "./src/antagonist-page/main.ts",
    "./src/protagonist-page/main.ts",
  ];

  for (const entryPoint of entryPoints) {
    await build({
      ...config,
      entryPoints: [entryPoint],
      outfile: entryPoint.replace(".ts", ".js"),
    });
  }
};
