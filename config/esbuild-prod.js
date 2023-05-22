import * as esbuild from "esbuild";
import { CleanPlugin } from "./plugins/clean-plugin.js";

await esbuild.build({
  entryPoints: ["./src/index.tsx"],
  bundle: true,
  minify: true,
  outdir: "./build/prod",
  allowOverwrite: true,
  plugins: [CleanPlugin],
  entryNames: "[dir]/bundle.[name]-[hash]",
  //TODO: test splitting of code
  // splitting: true,
  loader: {
    ".js": "jsx",
    ".svg": "text",
  },
});
