import { readFileSync, writeFileSync } from "fs";

const projectPackage = JSON.parse(readFileSync("../../package.json", "utf8"));

const BASIC_TAILWIND_CONFIG = `/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/superui/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

(async () => {
  try {
    const tailwindConfig = await import("../../tailwind.config.js");
    const hasTailwindInstalled = projectPackage.devDependencies?.tailwindcss
      ? true
      : false;

    if (!hasTailwindInstalled) {
      console.log("TailwindCSS not installed. Skipping postinstall...");
      console.log(projectPackage);
      return;
    }

    if (!tailwindConfig) {
      console.log("TailwindCSS config not found. Creating base config file...");
      writeFileSync("../../tailwind.config.js", BASIC_TAILWIND_CONFIG);
      return;
    }

    const content = tailwindConfig.default.content;
    const isAdded = content.includes(
      "./node_modules/superui/**/*.{js, jsx, ts, tsx}"
    );

    if (!isAdded) {
      tailwindConfig.default.content.push(
        "./node_modules/superui/**/*.{js, jsx, ts, tsx}"
      );

      const rawConfig = `/** @type {import('tailwindcss').Config} */
    module.exports = ${JSON.stringify(tailwindConfig.default, null, 2)}`;

      writeFileSync("../../tailwind.config.js", rawConfig);
      console.log("TailwindCSS config updated.");
      return;
    }

    console.log("TailwindCSS postinstall complete.");
    return;
  } catch (error) {
    console.log(error);
    return;
  }
})();
