import * as ESBuild from "esbuild";

await ESBuild.build({
  entryPoints: ["./src/index.tsx"],
  bundle: true,
  minify: true,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outfile: "./build/bundle.js",
  entryNames: "bundle",
  loader: {
    ".js": "jsx",
  },
});
