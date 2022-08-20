const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const withTM = require("next-transpile-modules")([
  "@superui/styles",
  "monaco-editor",
]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: ["javascript"],
        filename: "static/[name].worker.js",
      })
    );
    return config;
  },
});
