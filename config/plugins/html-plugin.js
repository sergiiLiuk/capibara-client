import { rm, writeFile } from "fs/promises";
import path from "path";

const preparePath = (outputs) => {
  return outputs.reduce((acc, path) => {
    const slittedFileName = path.split("/").pop();

    if (slittedFileName?.endsWith(".js")) {
      acc.push(slittedFileName);
    }
    return acc;
  }, []);
};

export const HTMLPlugin = (options) => {
  return {
    name: "HTMLPlugin",
    setup(build) {
      const outdir = build.initialOptions.outdir;
      build.onStart(async () => {
        try {
          if (outdir) {
            await rm(outdir, { recursive: true });
          }
        } catch (e) {
          console.log("error cleaning the folder");
        }
      });
      build.onEnd(async (result) => {
        const outputs = result.metafile?.outputs;
        const [jsPath] = preparePath(Object.keys(outputs || {}));

        if (outdir) {
          await writeFile(
            path.resolve(outdir, "index.html"),
            `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>${options.title}</title>
                <!--<link rel="icon" href="./favicon.ico" type="image/x-icon" /> -->
              </head>
              <body>
                <div id="root"></div>
                <script src=${jsPath}></script>
              </body>
            </html>`
          );
        }
      });
    },
  };
};

// ${jsPath
//   .map((path) => `<script src=${path}></script>`)
//   .join(" ")}
