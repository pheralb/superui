import { defineConfig } from "tsup";
import { getFiles } from "./files";

export default defineConfig({
  entry: getFiles().concat("./styles/main.css").concat("./index.ts"),
  splitting: true,
  sourcemap: true,
  clean: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
});
