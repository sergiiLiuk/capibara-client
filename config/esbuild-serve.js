import * as ESBuild from "esbuild";
import postCssPlugin from "esbuild-style-plugin";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

let ctx = await ESBuild.context({
  entryPoints: ["./src/index.tsx", "./src/style.css"],
  bundle: true,
  minify: false,
  // target: ["chrome58", "firefox57", "safari11", "edge16"],
  outdir: "www/js",
  sourcemap: true,
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
  servedir: "www",
});
