import { defineConfig } from "tsup";
import { getFiles } from "./files";
import { spawn } from "child_process";

export default defineConfig({
  entry: getFiles().concat("./styles/main.css").concat("./index.ts"),
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  dts: false,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  async onSuccess() {
    await new Promise((resolve) => {
      const child = spawn("tsc", [
        "--emitDeclarationOnly",
        "--declaration",
        "--outDir",
        "dist/types",
      ]);
      child.on("close", resolve);
    }).catch((e) => {
      console.error(e);
      process.exit(0);
    });
  },
});
