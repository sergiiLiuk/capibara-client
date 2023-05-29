import * as esbuild from "esbuild";
import { CleanPlugin } from "./plugins/clean-plugin.js";
import { HTMLPlugin } from "./plugins/html-plugin.js";

await esbuild.build({
  entryPoints: ["./src/index.tsx"],
  bundle: true,
  minify: true,
  outdir: "./build/prod",
  allowOverwrite: true,
  metafile: true,
  plugins: [
    CleanPlugin,
    HTMLPlugin({
      title: "Capibara",
      jsPath: ["index.js"],
    }),
  ],
  entryNames: "[dir]/bundle.[name]-[hash]",
  //TODO: test splitting of code
  // splitting: true,
  loader: {
    ".js": "jsx",
    ".svg": "text",
  },
});
