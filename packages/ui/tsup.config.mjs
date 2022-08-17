import { defineConfig } from "tsup";
import { files } from "./files";

export default defineConfig({
  entry: files
    .map((f) => `./${f}/index.tsx`)
    .concat("./styles/main.css")
    .concat("./index.ts"),
  splitting: true,
  sourcemap: true,
  clean: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
});
