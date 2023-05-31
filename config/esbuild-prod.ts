import * as esbuild from "esbuild";
import { CleanPlugin } from "./plugins/clean-plugin";
import { HTMLPlugin } from "./plugins/html-plugin";
import stylePlugin from "esbuild-style-plugin";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const build = async () => {
  await esbuild.build({
    entryPoints: ["./src/index.tsx", "./src/style.css"],
    bundle: true,
    minify: true,
    outdir: "build/prod",
    allowOverwrite: true,
    metafile: true,
    tsconfig: "tsconfig.json",
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
};

build();
