import { Plugin } from "esbuild";
import { rm } from "fs/promises";

export const CleanPlugin: Plugin = {
  name: "CleanPlugin",
  setup(build) {
    build.onStart(async () => {
      try {
        const outdir = build.initialOptions.outdir;
        if (outdir) {
          await rm(outdir, { recursive: true });
        }
      } catch (e) {
        console.log("error cleaning the folder");
      }
    });
    build.onEnd(() => {
      console.log("production folder has been cleaned");
    });
  },
};
