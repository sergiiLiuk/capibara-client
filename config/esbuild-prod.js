import * as esbuild from "esbuild";
import { CleanPlugin } from "./plugins/clean-plugin.js";
import { HTMLPlugin } from "./plugins/html-plugin.js";
import stylePlugin from "esbuild-style-plugin";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

await esbuild.build({
  entryPoints: ["./src/index.tsx", "./src/style.css"],
  bundle: true,
  minify: true,
  outdir: "build/prod",
  allowOverwrite: true,
  metafile: true,
  plugins: [
    CleanPlugin,
    HTMLPlugin({
      title: "Capibara",
    }),
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
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
