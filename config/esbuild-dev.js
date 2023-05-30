import autoprefixer from "autoprefixer";
import * as ESBuild from "esbuild";
import { postCssPlugin } from "esbuild-style-plugin";
import tailwindcss from "tailwindcss";

let ctx = await ESBuild.context({
  entryPoints: ["./src/index.tsx", "./src/style.css"],
  bundle: true,
  minify: false,
  outdir: "build/dev-server/js",
  sourcemap: true,
  metafile: true,
  sourceRoot: "https://raw.githubusercontent.com/some/repo/v1.2.3/",
  loader: {
    ".js": "jsx",
  },
  plugins: [
    postCssPlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
});

await ctx.watch();
console.log("watching...");

const { host, port } = await ctx.serve({
  servedir: "build/dev-server",
});

console.log(`host: ${host}, port: ${port}`);
